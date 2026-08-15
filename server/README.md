# Aura-2.0 Agent Backend

This is the Java Spring Boot backend for the Aura-2.0 Agent React frontend. It provides intelligent responses to Java and programming-related questions.

## Project Structure

```
src/main/java/com/aura/agent/
│
├── AuraAgentApplication.java
│
├── controller/
│   └── AgentController.java
│
├── model/
│   ├── AgentQuestion.java
│   └── AgentResponse.java
│
├── service/
│   ├── AgentService.java
│   ├── AgentServiceImpl.java
│   └── QuestionClassifier.java
│
├── knowledge/
│   ├── JavaKnowledgeBase.java
│   └── QuestionCategory.java
│
└── exception/
    └── AgentException.java
```

## Requirements

- Java 17 or later
- Maven 3.6+

## How to Run

1. Navigate to the server directory:
   ```bash
   cd C:\Users\dell\Downloads\inalgo.tech\server
   ```

2. Build the project:
   ```bash
   mvn clean install
   ```

3. Run the application:
   ```bash
   mvn spring-boot:run
   ```
   Or run the built JAR:
   ```bash
   java -jar target/agent-1.0.0.jar
   ```

4. The application will start on port 8080 by default.

## API Endpoint

The backend exposes one main endpoint for the React frontend:

### POST /api/agent/ask

**Request Format:**
```json
{
  "question": "What is polymorphism in Java?"
}
```

**Response Format:**
```json
{
  "answer": "Polymorphism is the ability of an object to take on many forms. In Java, polymorphism allows us to perform a single action in different ways. There are two types: compile-time polymorphism (method overloading) and runtime polymorphism (method overriding).",
  "matched": true
}
```

**CORS Configuration:**
The backend is configured to accept requests from `http://localhost:3000` (the default React development server port).

## Example Requests and Responses

Here are several example interactions showing the agent's capabilities:

### 1. What is OOP?
**Request:**
```json
{
  "question": "What is OOP?"
}
```

**Response:**
```json
{
  "answer": "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of \"objects\", which can contain data and code: data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).",
  "matched": true
}
```

### 2. What is inheritance in Java?
**Request:**
```json
{
  "question": "What is inheritance in Java?"
}
```

**Response:**
```json
{
  "answer": "Inheritance is a mechanism where one class acquires the properties (fields) and behaviors (methods) of another class. The class that inherits is called the subclass (or child class), and the class being inherited from is called the superclass (or parent class).\n\nExample of inheritance in Java:\n\n// Parent class\nclass Animal {\n    void eat() {\n        System.out.println(\"This animal eats food\");\n    }\n}\n\n// Child class that inherits from Animal\nclass Dog extends Animal {\n    void bark() {\n        System.out.println(\"The dog barks\");\n    }\n}\n\n// Usage\npublic class Main {\n    public static void main(String[] args) {\n        Dog dog = new Dog();\n        dog.eat();  // Inherited method\n        dog.bark(); // Child class method\n    }\n}\n\nOutput:\nThis animal eats food\nThe dog barks",
  "matched": true
}
```

### 3. Explain polymorphism.
**Request:**
```json
{
  "question": "Explain polymorphism."
}
```

**Response:**
```json
{
  "answer": "Polymorphism is the ability of an object to take on many forms. In Java, polymorphism allows us to perform a single action in different ways. There are two types: compile-time polymorphism (method overloading) and runtime polymorphism (method overriding).\n\nExample of runtime polymorphism in Java:\n\nclass Animal {\n    void sound() {\n        System.out.println(\"Animal makes a sound\");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void sound() {\n        System.out.println(\"Dog barks\");\n    }\n}\n\nclass Cat extends Animal {\n    @Override\n    void sound() {\n        System.out.println(\"Cat meows\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal myAnimal = new Dog();  // Upcasting\n        myAnimal.sound();  // Calls Dog's sound() method\n        \n        myAnimal = new Cat();  // Upcasting\n        myAnimal.sound();  // Calls Cat's sound() method\n    }\n}\n\nOutput:\nDog barks\nCat meows",
  "matched": true
}
```

### 4. What is an interface?
**Request:**
```json
{
  "question": "What is an interface?"
}
```

**Response:**
```json
{
  "answer": "An interface in Java is a reference type, similar to a class, that can contain only constants, method signatures, default methods, static methods, and nested types. Interfaces cannot contain instance fields. The methods in interfaces are abstract by default.\n\nExample of interface in Java:\n\ninterface Animal {\n    void eat(); // abstract method\n    void sleep(); // abstract method\n}\n\nclass Dog implements Animal {\n    @Override\n    public void eat() {\n        System.out.println(\"Dog eats food\");\n    }\n    \n    @Override\n    public void sleep() {\n        System.out.println(\"Dog sleeps\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Dog dog = new Dog();\n        dog.eat();  // Output: Dog eats food\n        dog.sleep(); // Output: Dog sleeps\n    }\n}",
  "matched": true
}
```

### 5. Difference between ArrayList and LinkedList
**Request:**
```json
{
  "question": "Difference between ArrayList and LinkedList"
}
```

**Response:**
```json
{
  "answer": "Difference between ArrayList and LinkedList in Java:\n\nArrayList:\n- Implements List interface using a dynamic array\n- Random access O(1)\n- Insertion/deletion at beginning/middle O(n)\n- Better for frequent read operations\n- Memory overhead is lower\n\nLinkedList:\n- Implements List and Deque interfaces using a doubly-linked list\n- Random access O(n)\n- Insertion/deletion at beginning/end O(1)\n- Better for frequent insertions/deletions\n- Higher memory overhead due to storing previous/next references\n\nWhen to use which:\n- Use ArrayList when you need frequent access by index\n- Use LinkedList when you need frequent insertions/deletions from the beginning or end",
  "matched": true
}
```

### 6. What is HashMap?
**Request:**
```json
{
  "question": "What is HashMap?"
}
```

**Response:**
```json
{
  "answer": "HashMap in Java is a Map based collection class that is used for storing Key & value pairs. It is denoted as HashMap<Key, Value> or HashMap<K, V>. It makes use of the hash function and allows duplicate values while keys must be unique.\n\nExample of HashMap in Java:\n\nimport java.util.HashMap;\nimport java.util.Map;\n\npublic class HashMapDemo {\n    public static void main(String[] args) {\n        // Creating HashMap\n        Map<String, Integer> studentScores = new HashMap<>();\n        \n        // Adding key-value pairs\n        studentScores.put(\"Alice\", 85);\n        studentScores.put(\"Bob\", 92);\n        studentScores.put(\"Charlie\", 78);\n        \n        // Accessing values\n        System.out.println(\"Alice's score: \" + studentScores.get(\"Alice\")); // 85\n        \n        // Checking if key exists\n        System.out.println(\"Contains 'David': \" + studentScores.containsKey(\"David\")); // false\n        \n        // Iterating through keys\n        System.out.print(\"Students: \");\n        for (String name : studentScores.keySet()) {\n            System.out.print(name + \" \"); // Output: Alice Bob Charlie\n        }\n        System.out.println();\n        \n        // Iterating through values\n        System.out.print(\"Scores: \");\n        for (Integer score : studentScores.values()) {\n            System.out.print(score + \" \"); // Output: 85 92 78\n        }\n        System.out.println();\n        \n        // Removing entry\n        studentScores.remove(\"Bob\");\n        System.out.println(\"After removing Bob: \" + studentScores); // {Alice=85, Charlie=78}\n    }\n}",
  "matched": true
}
```

### 7. Explain exception handling.
**Request:**
```json
{
  "question": "Explain exception handling."
}
```

**Response:**
```json
{
  "answer": "Exception handling in Java is a mechanism to handle runtime errors such as ClassNotFoundException, IOException, SQLException, RemoteException, etc. The main advantage of exception handling is to maintain the normal flow of the application.\n\nExample of exception handling in Java:\n\npublic class ExceptionHandlingDemo {\n    public static void main(String[] args) {\n        try {\n            int[] numbers = {1, 2, 3};\n            System.out.println(numbers[5]); // This will throw ArrayIndexOutOfBoundsException\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"Array index is out of bounds!\");\n            System.out.println(\"Error message: \" + e.getMessage());\n        } catch (Exception e) {\n            System.out.println(\"Some other exception occurred\");\n        } finally {\n            System.out.println(\"This block always executes\");\n        }\n        \n        System.out.println(\"Program continues after exception handling\");\n    }\n}",
  "matched": true
}
```

### 8. What is a lambda expression?
**Request:**
```json
{
  "question": "What is a lambda expression?"
}
```

**Response:**
```json
{
  "answer": "A lambda expression in Java is a short block of code which takes in parameters and returns a value. Lambda expressions are similar to methods, but they do not need a name and they can be implemented right in the body of a method.\n\nExample of lambda expression in Java:\n\nimport java.util.ArrayList;\nimport java.util.Collections;\nimport java.util.List;\n\npublic class LambdaDemo {\n    public static void main(String[] args) {\n        List<String> names = new ArrayList<>();\n        names.add(\"Alice\");\n        names.add(\"Bob\");\n        names.add(\"Charlie\");\n        \n        // Before Java 8 - using anonymous inner class\n        Collections.sort(names, new java.util.Comparator<String>() {\n            @Override\n            public int compare(String s1, String s2) {\n                return s1.compareTo(s2);\n            }\n        });\n        \n        // Java 8+ - using lambda expression\n        Collections.sort(names, (s1, s2) -> s1.compareTo(s2));\n        \n        // Even more concise\n        Collections.sort(names, String::compareTo);\n        \n        System.out.println(\"Sorted names: \" + names); // Output: [Alice, Bob, Charlie]\n        \n        // Lambda with multiple parameters\n        java.util.BiFunction<Integer, Integer, Integer> adder = (a, b) -> a + b;\n        System.out.println(\"5 + 3 = \" + adder.apply(5, 3)); // Output: 8\n    }\n}",
  "matched": true
}
```

### 9. What is Stream API?
**Request:**
```json
{
  "question": "What is Stream API?"
}
```

**Response:**
```json
{
  "answer": "The Stream API in Java is used to process collections of objects. A stream is a sequence of objects that supports various methods which can be pipelined to produce the desired result. It allows functional-style operations on streams of elements.\n\nExample of Stream API in Java:\n\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\npublic class StreamDemo {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n        \n        // Filter even numbers and square them\n        List<Integer> squaredEvens = numbers.stream()\n                .filter(n -> n % 2 == 0)  // Filter even numbers\n                .map(n -> n * n)          // Square each number\n                .collect(Collectors.toList());\n        \n        System.out.println(\"Original numbers: \" + numbers);\n        System.out.println(\"Squared evens: \" + squaredEvens); // [4, 16, 36, 64, 100]\n        \n        // Find sum of numbers greater than 5\n        int sum = numbers.stream()\n                .filter(n -> n > 5)\n                .mapToInt(Integer::intValue)\n                .sum();\n        \n        System.out.println(\"Sum of numbers > 5: \" + sum); // 40\n        \n        // Find average\n        double average = numbers.stream()\n                .mapToInt(Integer::intValue)\n                .average()\n                .orElse(0.0);\n        \n        System.out.println(\"Average: \" + average); // 5.5\n    }\n}",
  "matched": true
}
```

### 10. What is multithreading?
**Request:**
```json
{
  "question": "What is multithreading?"
}
```

**Response:**
```json
{
  "answer": "Multithreading in Java is a process of executing multiple threads simultaneously to maximize CPU utilization. A thread is a lightweight sub-process, the smallest unit of processing. Multithreading allows us to write programs that can perform multiple tasks concurrently.\n\nExample of multithreading in Java:\n\npublic class MultithreadingDemo {\n    public static void main(String[] args) {\n        // Creating thread by extending Thread class\n        Thread thread1 = new Thread(() -> {\n            for (int i = 1; i <= 5; i++) {\n                System.out.println(\"Thread 1: \" + i);\n                try { Thread.sleep(500); } catch (InterruptedException e) {}\n            }\n        });\n        \n        // Creating thread by implementing Runnable interface\n        Thread thread2 = new Thread(() -> {\n            for (int i = 1; i <= 5; i++) {\n                System.out.println(\"Thread 2: \" + i);\n                try { Thread.sleep(500); } catch (InterruptedException e) {}\n            }\n        });\n        \n        // Starting threads\n        thread1.start();\n        thread2.start();\n        \n        // Main thread continues\n        for (int i = 1; i <= 3; i++) {\n            System.out.println(\"Main thread: \" + i);\n            try { Thread.sleep(500); } catch (InterruptedException e) {}\n        }\n        \n        try {\n            thread1.join();\n            thread2.join();\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n        \n        System.out.println(\"All threads finished\");\n    }\n}",
  "matched": true
}
```

### 11. What is the JVM?
**Request:**
```json
{
  "question": "What is the JVM?"
}
```

**Response:**
```json
{
  "answer": "The Java Virtual Machine (JVM) is a virtual machine that enables a computer to run Java programs as well as programs written in other languages that are also compiled to Java bytecode. The JVM acts as a runtime engine which calls the main method present in the Java code.\n\nThe JVM is responsible for:\n- Loading code\n- Verifying code\n- Executing code\n- Providing runtime environment\n\nIt provides platform independence by interpreting bytecode specific to the underlying operating system and hardware combination.",
  "matched": true
}
```

### 12. What is dependency injection?
**Request:**
```json
{
  "question": "What is dependency injection?"
}
```

**Response:**
```json
{
  "answer": "Dependency Injection (DI) in Spring is a design pattern in which an object receives other objects that it depends on. These other objects are called dependencies. In the typical \"using\" relationship the receiving object is called a client and the passed object is called a service.\n\nExample of Dependency Injection in Spring:\n\n@Service\npublic class UserService {\n    private final UserRepository userRepository;\n    \n    // Constructor injection\n    public UserService(UserRepository userRepository) {\n        this.userRepository = userRepository;\n    }\n    \n    public User findUserById(Long id) {\n        return userRepository.findById(id).orElse(null);\n    }\n}\n\n@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    private final UserService userService;\n    \n    // Constructor injection\n    public UserController(UserService userService) {\n        this.userService = userService;\n    }\n    \n    @GetMapping(\"/{id}\")\n    public ResponseEntity<User> getUser(@PathVariable Long id) {\n        User user = userService.findUserById(id);\n        if (user == null) {\n            return ResponseEntity.notFound().build();\n        }\n        return ResponseEntity.ok(user);\n    }\n}",
  "matched": true
}
```

### 13. What is Spring Boot?
**Request:**
```json
{
  "question": "What is Spring Boot?"
}
```

**Response:**
```json
{
  "answer": "Spring Boot is an open-source Java-based framework used to create a micro Service. It is developed by Pivotal Team and is used to build stand-alone and production ready spring applications. It provides defaults for code and annotation configuration to quick start new Spring projects.\n\nExample of a simple Spring Boot REST controller:\n\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class HelloController {\n    \n    @GetMapping(\"/hello\")\n    public String sayHello() {\n        return \"Hello, World!\";\n    }\n}\n\nThis creates a REST endpoint at /hello that returns \"Hello, World!\" when accessed via GET request.",
  "matched": true
}
```

### 14. Create a REST API in Spring Boot
**Request:**
```json
{
  "question": "Create a REST API in Spring Boot"
}
```

**Response:**
```json
{
  "answer": "Here's how to create a REST API in Spring Boot:\n\nStep 1: Create a Spring Boot project with Spring Web dependency\nStep 2: Create a model class (Entity)\nStep 3: Create a repository interface\nStep 4: Create a service class\nStep 5: Create a REST controller\n\nExample - Simple User Management API:\n\n// 1. Model (User.java)\npublic class User {\n    private Long id;\n    private String name;\n    private String email;\n    \n    // Getters and setters\n}\n\n// 2. Repository (UserRepository.java)\npublic interface UserRepository extends JpaRepository<User, Long> {}\n\n// 3. Service (UserService.java)\n@Service\npublic class UserService {\n    private final UserRepository userRepository;\n    \n    public UserService(UserRepository userRepository) {\n        this.userRepository = userRepository;\n    }\n    \n    public List<User> getAllUsers() {\n        return userRepository.findAll();\n    }\n    \n    public User getUserById(Long id) {\n        return userRepository.findById(id).orElse(null);\n    }\n    \n    public User createUser(User user) {\n        return userRepository.save(user);\n    }\n}\n\n// 4. Controller (UserController.java)\n@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    private final UserService userService;\n    \n    public UserController(UserService userService) {\n        this.userService = userService;\n    }\n    \n    @GetMapping\n    public List<User> getAllUsers() {\n        return userService.getAllUsers();\n    }\n    \n    @GetMapping(\"/{id}\")\n    public ResponseEntity<User> getUserById(@PathVariable Long id) {\n        User user = userService.getUserById(id);\n        if (user == null) {\n            return ResponseEntity.notFound().build();\n        }\n        return ResponseEntity.ok(user);\n    }\n    \n    @PostMapping\n    public ResponseEntity<User> createUser(@RequestBody User user) {\n        User savedUser = userService.createUser(user);\n        return ResponseEntity.created(\"/api/users/\" + savedUser.getId())\n                .body(savedUser);\n    }\n}\n\nDon't forget to add the following to your application.properties:\n\nspring.datasource.url=jdbc:mysql://localhost:3306/yourdatabase\nspring.datasource.username=yourusername\nspring.datasource.password=yourpassword\nspring.jpa.hibernate.ddl-auto=update\n",
  "matched": true
}
```

### 15. Write a Java program to reverse a string.
**Request:**
```json
{
  "question": "Write a Java program to reverse a string."
}
```

**Response:**
```json
{
  "answer": "Here are several ways to reverse a string in Java:\n\nMethod 1: Using StringBuilder\n\npublic class StringReverser {\n    public static String reverse(String input) {\n        if (input == null) {\n            return null;\n        }\n        return new StringBuilder(input).reverse().toString();\n    }\n    \n    public static void main(String[] args) {\n        String original = \"Hello, World!\";\n        String reversed = reverse(original);\n        System.out.println(\"Original: \" + original);\n        System.out.println(\"Reversed: \" + reversed);\n        // Output: Original: Hello, World!\n        //         Reversed: !dlroW ,olleH\n    }\n}\n\nMethod 2: Using recursion\n\npublic class StringReverser {\n    public static String reverse(String input) {\n        if (input == null || input.isEmpty()) {\n            return input;\n        }\n        return reverse(input.substring(1)) + input.charAt(0);\n    }\n    \n    public static void main(String[] args) {\n        String original = \"Hello, World!\";\n        String reversed = reverse(original);\n        System.out.println(\"Original: \" + original);\n        System.out.println(\"Reversed: \" + reversed);\n        // Output: Original: Hello, World!\n        //         Reversed: !dlroW ,olleH\n    }\n}\n\nMethod 3: Using character array\n\npublic class StringReverser {\n    public static String reverse(String input) {\n        if (input == null) {\n            return null;\n        }\n        char[] chars = input.toCharArray();\n        int left = 0;\n        int right = chars.length - 1;\n        \n        while (left < right) {\n            // Swap characters\n            char temp = chars[left];\n            chars[left] = chars[right];\n            chars[right] = temp;\n            left++;\n            right--;\n        }\n        \n        return new String(chars);\n    }\n    \n    public static void main(String[] args) {\n        String original = \"Hello, World!\";\n        String reversed = reverse(original);\n        System.out.println(\"Original: \" + original);\n        System.out.println(\"Reversed: \" + reversed);\n        // Output: Original: Hello, World!\n        //         Reversed: !dlroW ,olleH\n    }\n}",
  "matched": true
}
```

### 16. Solve a Java coding problem (Find the largest number in an array)
**Request:**
```json
{
  "question": "Write a Java program to find the largest number in an array"
}
```

**Response:**
```json
{
  "answer": "Here's a Java program to find the largest number in an array:\n\npublic class ArrayMaxFinder {\n    \n    /**\n     * Finds the largest number in an array of integers.\n     * @param numbers Array of integers\n     * @return The largest number, or Integer.MIN_VALUE if array is null or empty\n     */\n    public static int findLargest(int[] numbers) {\n        // Handle edge cases\n        if (numbers == null || numbers.length == 0) {\n            return Integer.MIN_VALUE;\n        }\n        \n        // Initialize max with the first element\n        int max = numbers[0];\n        \n        // Iterate through the array starting from the second element\n        for (int i = 1; i < numbers.length; i++) {\n            if (numbers[i] > max) {\n                max = numbers[i];\n            }\n        }\n        \n        return max;\n    }\n    \n    /**\n     * Alternative implementation using Java 8 Stream API\n     */\n    public static int findLargestWithStream(int[] numbers) {\n        if (numbers == null || numbers.length == 0) {\n            return Integer.MIN_VALUE;\n        }\n        \n        return Arrays.stream(numbers)\n                .max()\n                .orElse(Integer.MIN_VALUE);\n    }\n    \n    public static void main(String[] args) {\n        int[] numbers = {3, 7, 2, 9, 4, 12, 5};\n        \n        int largest = findLargest(numbers);\n        System.out.println(\"Array: \" + Arrays.toString(numbers));\n        System.out.println(\"Largest number: \" + largest);\n        // Output: Array: [3, 7, 2, 9, 4, 12, 5]\n        //         Largest number: 12\n        \n        // Test with stream version\n        int largestStream = findLargestWithStream(numbers);\n        System.out.println(\"Largest number (stream): \" + largestStream);\n        \n        // Test edge cases\n        System.out.println(\"Largest in empty array: \" + findLargest(new int[]{})); // Integer.MIN_VALUE\n        System.out.println(\"Largest in null array: \" + findLargest(null)); // Integer.MIN_VALUE\n        System.out.println(\"Largest in single element: \" + findLargest(new int[]{42})); // 42\n    }\n}\n\n**Important Notes:**\n1. The method handles null and empty arrays by returning Integer.MIN_VALUE\n2. Time complexity: O(n) where n is the length of the array\n3. Space complexity: O(1) - only uses a constant amount of extra space\n4. Works with negative numbers as well\n\n**Alternative Approaches:**\n- Using Arrays.sort() and taking the last element (O(n log n) time complexity)\n- Using Collections.max() with Arrays.asList() (requires Integer[] not int[])\n- Using recursion (less efficient due to call stack overhead)",
  "matched": true
}
```

### 17. Non-Java question (should get fallback response)
**Request:**
```json
{
  "question": "What is the capital of France?"
}
```

**Response:**
```json
{
  "answer": "I am Aura-2.0's Java and Programming Agent. I specialize in Java, programming, software development, algorithms, data structures, and related technologies. Please ask me a Java or programming question.",
  "matched": false
}
```

## Extension Points

To add more Java topics:

1. **Add new entries to JavaKnowledgeBase.initializeKnowledgeBase()** - Simply add more key-value pairs to the knowledgeMap where the key is the normalized question and the value is the answer.

2. **Enhance QuestionClassifier** - Add new categories to the QuestionCategory enum and add classification logic in the classifyQuestion method.

3. **The system is designed to be extensible** - You can add new knowledge without modifying the controller or service interfaces.

## Implementation Notes

- **Separation of Concerns**: The controller handles HTTP requests, the service handles business logic, and the knowledge base stores information.
- **Dependency Injection**: All services are injected via constructors, making the code testable and following Spring best practices.
- **Normalization**: Questions are normalized (lowercase, trimmed, punctuation removed) for better matching.
- **Fallback Handling**: Non-Java questions receive a polite fallback message explaining the agent's specialization.
- **Extensible Design**: Adding new topics requires only adding entries to the knowledge base and optionally updating the classifier.

## Troubleshooting

If you encounter issues:

1. **Port already in use**: Change the port in application.properties or stop the conflicting process
2. **CORS issues**: Ensure the @CrossOrigin annotation matches your frontend's origin
3. **Compilation errors**: Make sure you're using Java 17 or later
4. **Dependency issues**: Run `mvn clean install` to download all dependencies