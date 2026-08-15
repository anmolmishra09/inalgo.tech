package com.aura.agent.knowledge;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

/**
 * Knowledge base containing information about Java and programming topics.
 * Provides answers to questions based on predefined categories and keywords.
 */
@Service
public class JavaKnowledgeBase {

    // Map to store question patterns and their corresponding answers
    private final Map<String, String> knowledgeMap;

    public JavaKnowledgeBase() {
        this.knowledgeMap = new HashMap<>();
        initializeKnowledgeBase();
    }

    /**
     * Initializes the knowledge base with Java and programming information.
     */
    private void initializeKnowledgeBase() {

        knowledgeMap.put("what is ai", "AI (Artificial Intelligence) is the technology that enables computers and machines to perform tasks that normally require human intelligence, such as learning, reasoning, understanding language, recognizing images, and making decisions.");

knowledgeMap.put("what is artificial intelligence", "Artificial Intelligence is a field of computer science focused on creating machines and software that can perform tasks that normally require human intelligence.");

knowledgeMap.put("how does ai work", "AI works by using algorithms and data to identify patterns, learn from examples, make predictions, and generate responses or decisions.");

knowledgeMap.put("why is ai important", "AI is important because it can automate tasks, analyze large amounts of data, improve productivity, support decision-making, and enable new products and services.");

knowledgeMap.put("what are the different types of ai", "The main commonly discussed types of AI are narrow AI, artificial general intelligence, and artificial superintelligence. Today's practical AI systems are primarily narrow AI.");

knowledgeMap.put("what are the main applications of ai", "AI is used in healthcare, education, finance, transportation, customer service, cybersecurity, entertainment, marketing, manufacturing, and many other fields.");

knowledgeMap.put("what are the benefits of ai", "AI can automate repetitive tasks, process large amounts of information, improve efficiency, assist decision-making, personalize services, and help people solve complex problems.");

knowledgeMap.put("what are the disadvantages of ai", "AI can produce incorrect results, reflect biases in data, create privacy and security concerns, require significant computing resources, and potentially disrupt some jobs.");

knowledgeMap.put("what are the advantages of artificial intelligence", "The advantages of AI include automation, faster data analysis, improved productivity, personalization, pattern recognition, and assistance with complex tasks.");

knowledgeMap.put("what are the limitations of ai", "AI can have limitations such as inaccurate outputs, lack of common sense, dependence on training data, bias, limited context understanding, and difficulty handling unfamiliar situations.");

knowledgeMap.put("how is ai used in everyday life", "AI is used in search engines, recommendation systems, navigation apps, smartphones, voice assistants, spam filters, online shopping, social media, and many other everyday services.");

knowledgeMap.put("where is ai used", "AI is used across industries including healthcare, finance, education, transportation, retail, manufacturing, entertainment, cybersecurity, agriculture, and customer service.");

knowledgeMap.put("what are examples of ai", "Examples of AI include chatbots, voice assistants, recommendation systems, image recognition, fraud detection, autonomous systems, translation tools, and generative AI applications.");

knowledgeMap.put("what is generative ai", "Generative AI is a type of AI that can create new content such as text, images, audio, video, software code, and other forms of content based on learned patterns.");

knowledgeMap.put("what is machine learning", "Machine learning is a branch of AI in which computer systems learn patterns from data and use those patterns to make predictions or decisions without being explicitly programmed for every case.");

knowledgeMap.put("what is deep learning", "Deep learning is a type of machine learning that uses multi-layered neural networks to learn complex patterns from large amounts of data.");

knowledgeMap.put("what is neural network ai", "A neural network is a machine learning model inspired by the structure of biological neural networks. It consists of interconnected computational units that learn patterns from data.");

knowledgeMap.put("what is an ai model", "An AI model is a computational system trained on data to perform tasks such as prediction, classification, language generation, image recognition, or decision-making.");

knowledgeMap.put("what is an ai algorithm", "An AI algorithm is a set of computational procedures used to process data, identify patterns, learn from examples, or make predictions and decisions.");

knowledgeMap.put("what is an ai system", "An AI system is a software or hardware system that uses artificial intelligence techniques to perform tasks such as prediction, reasoning, recognition, generation, or automation.");

knowledgeMap.put("what is narrow ai", "Narrow AI is an AI system designed to perform specific tasks or a limited range of tasks. Most AI applications available today are examples of narrow AI.");

knowledgeMap.put("what is general ai", "Artificial General Intelligence, or AGI, refers to a hypothetical AI system capable of performing a broad range of intellectual tasks at a level comparable to or beyond humans.");

knowledgeMap.put("what is superintelligent ai", "Artificial superintelligence refers to a hypothetical AI system whose general intellectual abilities would significantly exceed those of humans.");

knowledgeMap.put("what is weak ai", "Weak AI, also called narrow AI, refers to systems designed for specific tasks rather than general human-like intelligence.");

knowledgeMap.put("what is strong ai", "Strong AI generally refers to a hypothetical form of AI with broad, human-like intelligence and potentially consciousness, depending on the definition being used.");

knowledgeMap.put("what is predictive ai", "Predictive AI uses historical and current data to identify patterns and make predictions about future or unknown outcomes.");

knowledgeMap.put("what is conversational ai", "Conversational AI is technology that enables computers to communicate with people using natural language through chatbots, voice assistants, and similar systems.");

knowledgeMap.put("what is autonomous ai", "Autonomous AI refers to AI systems that can perform tasks or make decisions with limited direct human intervention.");

knowledgeMap.put("what is multimodal ai", "Multimodal AI can process and combine multiple types of information, such as text, images, audio, video, and other data formats.");

knowledgeMap.put("what is responsible ai", "Responsible AI is the practice of developing and using AI in ways that emphasize safety, fairness, transparency, privacy, accountability, and appropriate human oversight.");

knowledgeMap.put("how was ai invented", "AI developed through decades of research in mathematics, computer science, logic, statistics, neuroscience, and related fields. The modern field is commonly traced to research in the 1950s.");

knowledgeMap.put("who invented artificial intelligence", "Artificial intelligence does not have a single inventor. Many researchers contributed to the field, and the term 'artificial intelligence' was famously proposed by John McCarthy in 1956.");

knowledgeMap.put("when was ai invented", "AI does not have one exact invention date, but the modern field of artificial intelligence is commonly associated with research in the 1950s, especially the 1956 Dartmouth workshop.");

knowledgeMap.put("what is the history of ai", "The history of AI includes early work in logic and computation, the Dartmouth workshop of 1956, periods of rapid research, AI winters, advances in machine learning, deep learning, and the recent rise of generative AI.");

knowledgeMap.put("how old is artificial intelligence", "The modern field of artificial intelligence is about seven decades old, with major milestones beginning in the 1950s.");

knowledgeMap.put("how has ai evolved", "AI has evolved from rule-based systems to statistical machine learning, deep learning, large language models, generative AI, multimodal systems, and increasingly autonomous AI systems.");

knowledgeMap.put("what is the future of ai", "The future of AI is expected to include more capable assistants, improved automation, multimodal systems, AI agents, robotics, scientific applications, and new ways of working with AI.");

knowledgeMap.put("why is ai growing so fast", "AI is growing rapidly because of improvements in computing power, large datasets, machine learning techniques, specialized hardware, cloud computing, and significant investment in AI research and products.");

knowledgeMap.put("why is ai so popular", "AI is popular because modern AI tools can perform useful tasks such as writing, coding, research, image generation, data analysis, automation, and conversational assistance.");

knowledgeMap.put("why are companies using ai", "Companies use AI to automate repetitive work, analyze data, improve customer experiences, increase productivity, reduce costs, and develop new products and services.");

knowledgeMap.put("how intelligent is ai", "AI can outperform humans on some specialized tasks while remaining limited in areas such as general reasoning, physical-world understanding, common sense, and reliably handling unfamiliar situations.");

knowledgeMap.put("can ai think", "AI can process information, reason in certain ways, and generate responses, but whether AI literally 'thinks' like a human depends on how thinking is defined. Current AI should not automatically be assumed to have human-like consciousness.");

knowledgeMap.put("can ai learn by itself", "Some AI systems can learn from data or feedback with limited human intervention, but they generally operate within training methods, objectives, and environments designed by people.");

knowledgeMap.put("can ai make decisions", "Yes. AI systems can make or recommend decisions based on data and programmed objectives, although important decisions often require appropriate human oversight.");

knowledgeMap.put("can ai understand humans", "AI can process and respond to human language and recognize some patterns related to human behavior, but its understanding is different from human experience and consciousness.");

knowledgeMap.put("can ai understand emotions", "AI can analyze signals such as words, facial expressions, or voice characteristics to estimate emotions, but this does not necessarily mean that AI actually experiences or understands emotions like humans do.");

knowledgeMap.put("can ai have emotions", "Current AI systems can simulate emotional language and behavior, but there is no established evidence that today's AI systems experience emotions in the human sense.");

knowledgeMap.put("can ai become conscious", "Whether AI can become conscious is an open scientific and philosophical question. There is currently no established evidence that today's AI systems are conscious.");

knowledgeMap.put("can ai replace humans", "AI can automate or assist with many tasks performed by humans, but replacing humans entirely is much broader and depends on the task, technology, economics, and social factors.");

knowledgeMap.put("can ai replace human intelligence", "AI can exceed human performance in some specialized tasks, but human intelligence remains broader and includes physical experience, social understanding, general adaptability, and many other abilities.");

knowledgeMap.put("is ai smarter than humans", "AI is better than humans at some specific tasks, such as certain calculations and pattern-recognition problems, while humans remain stronger across many general real-world activities.");

knowledgeMap.put("is ai dangerous", "AI can create risks when it is poorly designed, misused, or deployed without appropriate safeguards. The level of risk depends on the system and how it is used.");

knowledgeMap.put("is ai safe", "AI can be used safely when systems are appropriately designed, tested, monitored, secured, and used with suitable human oversight.");

knowledgeMap.put("is ai good or bad", "AI is neither inherently good nor bad. Its effects depend on how the technology is designed, deployed, governed, and used.");

knowledgeMap.put("is ai reliable", "AI reliability varies by system and task. AI can be highly useful but may still produce errors, so important outputs should be appropriately verified.");

knowledgeMap.put("is ai accurate", "AI accuracy depends on the model, data, task, and context. AI can be highly accurate for some tasks while producing incorrect results for others.");

knowledgeMap.put("can ai make mistakes", "Yes. AI can make mistakes because of incomplete or biased data, ambiguous inputs, model limitations, incorrect reasoning, or unfamiliar situations.");

knowledgeMap.put("why does ai make mistakes", "AI can make mistakes because models learn patterns from data rather than possessing perfect knowledge, and their outputs can be affected by training data, uncertainty, context, and model limitations.");

knowledgeMap.put("why does ai give wrong answers", "AI may give wrong answers because it can misinterpret a question, lack relevant information, generate plausible but incorrect content, or make reasoning and prediction errors.");

knowledgeMap.put("can ai be trusted", "AI can be useful and trustworthy for appropriate tasks when its limitations are understood and important outputs are verified.");

knowledgeMap.put("how does ai learn", "AI learns by processing training data and adjusting model parameters to recognize patterns or optimize a particular objective.");

knowledgeMap.put("how does ai understand language", "Language models process text as numerical representations and learn statistical relationships between words, phrases, and broader patterns in language.");

knowledgeMap.put("how does ai recognize images", "AI image-recognition systems use computer vision models trained on images to identify patterns, objects, shapes, textures, and other visual features.");

knowledgeMap.put("how does ai recognize speech", "Speech-recognition AI analyzes audio signals and uses trained models to convert spoken sounds into text or identify spoken language.");

knowledgeMap.put("how does ai generate text", "Generative language models generate text by predicting and producing sequences of tokens based on patterns learned during training and the context provided to them.");

knowledgeMap.put("how does ai generate images", "AI image generators use trained models to create visual content based on learned patterns and instructions such as text prompts or reference images.");

knowledgeMap.put("how does ai generate videos", "AI video systems generate or transform sequences of visual frames using learned patterns, often guided by text, images, existing video, or other inputs.");

knowledgeMap.put("how does ai generate music", "AI music systems learn patterns in musical data and use those patterns to generate or transform melodies, rhythms, harmonies, sounds, or complete musical pieces.");

knowledgeMap.put("how does ai learn from data", "AI learns from data by identifying statistical patterns and adjusting model parameters during training so the system can perform a specific task.");

knowledgeMap.put("what is ai training", "AI training is the process of exposing an AI model to data and adjusting its parameters so it learns patterns useful for a particular task.");

knowledgeMap.put("what is ai inference", "AI inference is the process of using a trained AI model to produce a prediction, classification, response, or other output from new input data.");

knowledgeMap.put("what is ai data", "AI data refers to the information used to train, evaluate, fine-tune, or operate AI systems.");

knowledgeMap.put("what is ai automation", "AI automation uses artificial intelligence to perform or assist with tasks that would otherwise require manual human work.");

knowledgeMap.put("what is ai optimization", "AI optimization involves using AI techniques to find better solutions, improve processes, reduce costs, or optimize decisions based on defined objectives.");

knowledgeMap.put("what is ai personalization", "AI personalization uses information about users, behavior, preferences, or context to tailor content, recommendations, services, or experiences.");

knowledgeMap.put("what is ai prediction", "AI prediction uses learned patterns from data to estimate an outcome, value, category, or future event.");

knowledgeMap.put("what is ai recognition", "AI recognition is the use of AI to identify patterns, objects, people, speech, text, or other features in data.");

knowledgeMap.put("what is ai classification", "AI classification is the process of assigning data to one or more predefined categories using a trained model.");

knowledgeMap.put("what is ai computer vision", "Computer vision is an AI field that enables computers to analyze and interpret visual information from images and videos.");

knowledgeMap.put("what is natural language processing", "Natural Language Processing, or NLP, is a field of AI focused on enabling computers to process, understand, generate, and interact with human language.");

knowledgeMap.put("what is reinforcement learning", "Reinforcement learning is a machine learning approach in which an agent learns by interacting with an environment and receiving rewards or penalties for its actions.");

knowledgeMap.put("what is supervised learning", "Supervised learning trains a model using labeled examples so it can learn to predict outputs for new inputs.");

knowledgeMap.put("what is unsupervised learning", "Unsupervised learning finds patterns or structures in data without requiring predefined labels for every example.");

knowledgeMap.put("what is transfer learning", "Transfer learning uses knowledge learned from one task or dataset to improve performance on another related task.");

knowledgeMap.put("what is large language modeling", "Large language modeling is the process of training large neural networks on extensive text data to learn language patterns and perform language-related tasks.");

knowledgeMap.put("what is a large language model", "A Large Language Model, or LLM, is a neural network trained on large amounts of text data to understand and generate language.");

knowledgeMap.put("what is an llm", "An LLM, or Large Language Model, is an AI model designed to process and generate human language.");

knowledgeMap.put("what is an ai chatbot", "An AI chatbot is software that uses artificial intelligence to communicate with users through natural-language conversations.");

knowledgeMap.put("what is an ai assistant", "An AI assistant is software that uses AI to help users perform tasks such as answering questions, writing, organizing information, researching, or automating work.");

knowledgeMap.put("what is an ai agent", "An AI agent is an AI system designed to pursue goals by reasoning about tasks, selecting actions, and sometimes using external tools or systems.");

knowledgeMap.put("what is agentic ai", "Agentic AI refers to AI systems designed to take actions toward goals, often by planning tasks, using tools, evaluating results, and adapting their approach.");

knowledgeMap.put("what is an ai workflow", "An AI workflow is a sequence of tasks that uses AI models and other software to process information and complete a defined process.");

knowledgeMap.put("what is ai automation software", "AI automation software combines artificial intelligence with workflow automation to perform or assist with tasks that normally require manual work.");

knowledgeMap.put("what is ai powered software", "AI-powered software is software that incorporates AI capabilities such as prediction, language processing, image recognition, recommendation, or content generation.");

knowledgeMap.put("what is ai technology", "AI technology refers to methods, models, algorithms, hardware, and software used to create systems capable of performing tasks associated with intelligence.");

knowledgeMap.put("what is ai research", "AI research studies methods for creating more capable, reliable, efficient, safe, and useful artificial intelligence systems.");

knowledgeMap.put("what is ai development", "AI development is the process of designing, building, training, testing, deploying, and maintaining AI-powered applications and systems.");

knowledgeMap.put("what is ai engineering", "AI engineering focuses on building and deploying practical AI systems, including model integration, data pipelines, evaluation, infrastructure, and application development.");

knowledgeMap.put("how can beginners learn ai", "Beginners can learn AI by starting with basic concepts, learning some programming and statistics, using beginner-friendly courses, experimenting with AI tools, and building small projects.");

knowledgeMap.put("how can i start learning ai", "Start by learning basic AI and machine learning concepts, then practice with tools such as Python and beginner-friendly AI frameworks while building simple projects.");


        // Java Basics
        knowledgeMap.put("what is java", "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language that lets developers write once, run anywhere (WORA).");
        knowledgeMap.put("java definition", "Java is a programming language and computing platform first released by Sun Microsystems in 1995. It is characterized by its portability, security, and robustness.");
        knowledgeMap.put("features of java", "Java features include: Object-oriented, Platform independent, Simple, Secure, Robust, Architecture neutral, Portable, High performance, Multithreaded, and Distributed.");

        // OOP Concepts
        knowledgeMap.put("what is oop", "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of \"objects\", which can contain data and code: data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).");
        knowledgeMap.put("oop principles", "The four main principles of OOP are: Encapsulation, Inheritance, Polymorphism, and Abstraction.");
        knowledgeMap.put("what is encapsulation", "Encapsulation is the bundling of data with the methods that operate on that data, or the restricting of direct access to some of an object's components. It is used to hide the values or state of a structured data object inside a class, preventing unauthorized parties' direct access to them.");
        knowledgeMap.put("encapsulation example", "Example of encapsulation in Java:\n\npublic class Person {\n    private String name; // private field\n    private int age;\n    \n    // Public getter and setter methods\n    public String getName() {\n        return name;\n    }\n    \n    public void setName(String name) {\n        this.name = name;\n    }\n    \n    public int getAge() {\n        return age;\n    }\n    \n    public void setAge(int age) {\n        this.age = age;\n    }\n}\n\nThis encapsulates the name and age fields, controlling access through public methods.");
        knowledgeMap.put("what is inheritance", "Inheritance is a mechanism where one class acquires the properties (fields) and behaviors (methods) of another class. The class that inherits is called the subclass (or child class), and the class being inherited from is called the superclass (or parent class).");
        knowledgeMap.put("inheritance example", "Example of inheritance in Java:\n\n// Parent class\nclass Animal {\n    void eat() {\n        System.out.println(\"This animal eats food\");\n    }\n}\n\n// Child class that inherits from Animal\nclass Dog extends Animal {\n    void bark() {\n        System.out.println(\"The dog barks\");\n    }\n}\n\n// Usage\npublic class Main {\n    public static void main(String[] args) {\n        Dog dog = new Dog();\n        dog.eat();  // Inherited method\n        dog.bark(); // Child class method\n    }\n}\n\nOutput:\nThis animal eats food\nThe dog barks");
        knowledgeMap.put("what is polymorphism", "Polymorphism is the ability of an object to take on many forms. In Java, polymorphism allows us to perform a single action in different ways. There are two types: compile-time polymorphism (method overloading) and runtime polymorphism (method overriding).");
        knowledgeMap.put("polymorphism example", "Example of runtime polymorphism in Java:\n\nclass Animal {\n    void sound() {\n        System.out.println(\"Animal makes a sound\");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void sound() {\n        System.out.println(\"Dog barks\");\n    }\n}\n\nclass Cat extends Animal {\n    @Override\n    void sound() {\n        System.out.println(\"Cat meows\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal myAnimal = new Dog();  // Upcasting\n        myAnimal.sound();  // Calls Dog's sound() method\n        \n        myAnimal = new Cat();  // Upcasting\n        myAnimal.sound();  // Calls Cat's sound() method\n    }\n}\n\nOutput:\nDog barks\nCat meows");
        knowledgeMap.put("what is abstraction", "Abstraction is the concept of hiding the complex implementation details and showing only the essential features of the object. In Java, abstraction is achieved using abstract classes and interfaces.");
        knowledgeMap.put("abstraction example", "Example of abstraction using abstract class:\n\nabstract class Shape {\n    abstract void draw();\n}\n\nclass Circle extends Shape {\n    @Override\n    void draw() {\n        System.out.println(\"Drawing a circle\");\n    }\n}\n\nclass Rectangle extends Shape {\n    @Override\n    void draw() {\n        System.out.println(\"Drawing a rectangle\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Shape shape1 = new Circle();\n        Shape shape2 = new Rectangle();\n        \n        shape1.draw(); // Output: Drawing a circle\n        shape2.draw(); // Output: Drawing a rectangle\n    }\n}");
        knowledgeMap.put("what is interface", "An interface in Java is a reference type, similar to a class, that can contain only constants, method signatures, default methods, static methods, and nested types. Interfaces cannot contain instance fields. The methods in interfaces are abstract by default.");
        knowledgeMap.put("interface example", "Example of interface in Java:\n\ninterface Animal {\n    void eat(); // abstract method\n    void sleep(); // abstract method\n}\n\nclass Dog implements Animal {\n    @Override\n    public void eat() {\n        System.out.println(\"Dog eats food\");\n    }\n    \n    @Override\n    public void sleep() {\n        System.out.println(\"Dog sleeps\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Dog dog = new Dog();\n        dog.eat();  // Output: Dog eats food\n        dog.sleep(); // Output: Dog sleeps\n    }\n}");

        knowledgeMap.put("what is react js", "React.js is a JavaScript library for building user interfaces, especially for web applications and single-page applications.");

knowledgeMap.put("what is react", "React is an open-source JavaScript library developed by Meta for building reusable and interactive user interfaces.");

knowledgeMap.put("who created react js", "React was created by Jordan Walke, a software engineer at Facebook, which is now called Meta.");

knowledgeMap.put("when was react js created", "React was initially developed at Facebook around 2011 and was publicly released as an open-source project in 2013.");

knowledgeMap.put("why is react popular", "React is popular because it provides reusable components, efficient rendering, a large ecosystem, strong community support, and a developer-friendly approach to building user interfaces.");

knowledgeMap.put("what are the features of react", "Major React features include components, JSX, virtual DOM, one-way data flow, hooks, reusable code, and declarative UI development.");

knowledgeMap.put("what is jsx in react", "JSX is a syntax extension for JavaScript that allows developers to write HTML-like markup inside JavaScript code.");

knowledgeMap.put("why is jsx used in react", "JSX makes React components easier to write and understand by allowing UI structure and JavaScript logic to be expressed together.");

knowledgeMap.put("is jsx html", "No. JSX looks similar to HTML, but it is a JavaScript syntax extension that is transformed into JavaScript function calls.");

knowledgeMap.put("what is a react component", "A React component is a reusable piece of UI that can contain its own structure, logic, and behavior.");

knowledgeMap.put("what are the types of react components", "The main types are functional components and class components. Modern React development primarily uses functional components with hooks.");

knowledgeMap.put("what is a functional component in react", "A functional component is a JavaScript function that returns React elements describing the UI.");

knowledgeMap.put("what is a class component in react", "A class component is a JavaScript class that extends React.Component and can contain state and lifecycle methods.");

knowledgeMap.put("what is the difference between functional and class components", "Functional components are JavaScript functions and commonly use hooks, while class components use classes, lifecycle methods, and this.state.");

knowledgeMap.put("what is the virtual dom", "The Virtual DOM is an in-memory representation of the UI that React uses to determine which parts of the actual DOM need to be updated.");

knowledgeMap.put("how does virtual dom work", "React creates a representation of the UI, compares changes between renders, and updates the necessary parts of the actual DOM efficiently.");

knowledgeMap.put("what is reconciliation in react", "Reconciliation is React's process of comparing the previous UI representation with the new one to determine the minimum required updates.");

knowledgeMap.put("what is rendering in react", "Rendering is the process by which React calculates what the user interface should look like based on the current props, state, and component logic.");

knowledgeMap.put("what is react dom", "React DOM is the package that provides methods for rendering React components into the browser DOM.");

knowledgeMap.put("what is create root in react", "createRoot is a React DOM API used to create a root for rendering a React application into a DOM element.");

knowledgeMap.put("how do you create a react application", "A React application can be created using tools such as Vite, Create React App in legacy projects, or other modern React frameworks and build tools.");

knowledgeMap.put("what is vite in react", "Vite is a modern frontend build tool commonly used to create and develop React applications with fast development startup and hot module replacement.");

knowledgeMap.put("what is npm in react", "npm is the Node Package Manager, commonly used to install React, React libraries, development tools, and other JavaScript dependencies.");

knowledgeMap.put("what is npx in react", "npx is a tool included with npm that allows developers to execute packages and command-line tools without necessarily installing them globally.");

knowledgeMap.put("what is props in react", "Props are inputs passed from a parent component to a child component. They allow components to receive data and configuration.");

knowledgeMap.put("what is state in react", "State is data managed by a React component that can change over time and cause the component to render again.");

knowledgeMap.put("what is the difference between props and state", "Props are passed into a component by its parent and should be treated as read-only, while state is managed by the component and can change over time.");

knowledgeMap.put("are props immutable in react", "Props should be treated as immutable by the receiving component. A child component should not directly modify its props.");

knowledgeMap.put("what is use state in react", "useState is a React hook that allows a functional component to add and manage state.");
	knowledgeMap.put("what is useState in react", "useState is a React hook that allows a functional component to add and manage state.");

knowledgeMap.put("how does use state work", "useState returns the current state value and a setter function. Calling the setter schedules an update to the component's state.");
	knowledgeMap.put("how does useState work", "useState returns the current state value and a setter function. Calling the setter schedules an update to the component's state.");

knowledgeMap.put("what is use effect in react", "useEffect is a React hook used to synchronize a component with external systems or perform side effects after rendering.");
	knowledgeMap.put("what is useEffect in react", "useEffect is a React hook used to synchronize a component with external systems or perform side effects after rendering.");

knowledgeMap.put("when should use effect be used", "useEffect should generally be used when a component needs to synchronize with something outside React, such as subscriptions, timers, browser APIs, or network connections.");
	knowledgeMap.put("when should useEffect be used", "useEffect should generally be used when a component needs to synchronize with something outside React, such as subscriptions, timers, browser APIs, or network connections.");

knowledgeMap.put("what is use context in react", "useContext is a React hook that allows a component to read and subscribe to values provided by a React context.");
	knowledgeMap.put("what is useContext in react", "useContext is a React hook that allows a component to read and subscribe to values provided by a React context.");

knowledgeMap.put("what is react context", "React Context provides a way to share values such as themes, settings, or user information across components without passing props through every level.");

knowledgeMap.put("what is use reducer in react", "useReducer is a React hook for managing state using a reducer function and dispatched actions, especially when state logic is complex.");
	knowledgeMap.put("what is useReducer in react", "useReducer is a React hook for managing state using a reducer function and dispatched actions, especially when state logic is complex.");

knowledgeMap.put("what is use ref in react", "useRef is a React hook that provides a mutable reference whose value persists across renders without causing a re-render when changed.");
	knowledgeMap.put("what is useRef in react", "useRef is a React hook that provides a mutable reference whose value persists across renders without causing a re-render when changed.");

knowledgeMap.put("what is use memo in react", "useMemo is a React hook that can cache the result of a calculation between renders when its dependencies have not changed.");
	knowledgeMap.put("what is useMemo in react", "useMemo is a React hook that can cache the result of a calculation between renders when its dependencies have not changed.");

knowledgeMap.put("what is use callback in react", "useCallback is a React hook that can cache a function definition between renders when its dependencies have not changed.");
	knowledgeMap.put("what is useCallback in react", "useCallback is a React hook that can cache a function definition between renders when its dependencies have not changed.");

knowledgeMap.put("what is use layout effect in react", "useLayoutEffect is a React hook similar to useEffect, but it runs after DOM mutations and before the browser paints the updated screen.");
	knowledgeMap.put("what is useLayoutEffect in react", "useLayoutEffect is a React hook similar to useEffect, but it runs after DOM mutations and before the browser paints the updated screen.");

knowledgeMap.put("what are react hooks", "React Hooks are functions that let functional components use React features such as state, context, refs, and effects.");

knowledgeMap.put("what are the rules of hooks", "Hooks should be called only at the top level of React functions and only from React function components or custom hooks.");

knowledgeMap.put("can hooks be used inside loops", "No. Hooks should not be called inside loops, conditions, or nested functions because React relies on their consistent call order.");

knowledgeMap.put("what is a custom hook in react", "A custom hook is a reusable JavaScript function whose name normally starts with use and that can call other React hooks.");

knowledgeMap.put("why use custom hooks", "Custom hooks allow developers to extract and reuse stateful logic across multiple React components.");

knowledgeMap.put("what is event handling in react", "React event handling allows components to respond to user actions such as clicks, typing, submitting forms, and keyboard events.");

knowledgeMap.put("how do you handle click events in react", "Click events can be handled by passing a function to the onClick prop, such as button elements using onClick={handleClick}.");

knowledgeMap.put("what is synthetic event in react", "A React event is an object representing a browser event with a consistent interface for handling events in React applications.");

knowledgeMap.put("what are controlled components", "A controlled component is a form element whose value is managed by React state.");

knowledgeMap.put("what are uncontrolled components", "An uncontrolled component stores its form value in the DOM rather than React state and can commonly be accessed through a ref.");

knowledgeMap.put("controlled vs uncontrolled components", "Controlled components use React state as the source of truth, while uncontrolled components allow the DOM to manage the form value.");

knowledgeMap.put("how do you handle forms in react", "React forms are commonly handled using state for input values, event handlers for changes, and a submit handler for form submission.");

knowledgeMap.put("what is conditional rendering in react", "Conditional rendering means displaying different UI based on a condition using JavaScript expressions such as if statements, ternary operators, or logical operators.");

knowledgeMap.put("how do you render a list in react", "Lists are commonly rendered using JavaScript array methods such as map to create React elements for each item.");

knowledgeMap.put("what are keys in react", "Keys are special values that help React identify list items and determine which items have changed, been added, or removed.");

knowledgeMap.put("why are keys important in react", "Keys help React efficiently reconcile lists and maintain the correct identity of elements between renders.");

knowledgeMap.put("can array index be used as a key in react", "An array index can sometimes be used when a list is static and never reordered, but stable unique identifiers are generally preferred for dynamic lists.");

knowledgeMap.put("what is lifting state up in react", "Lifting state up means moving shared state to the closest common parent so that multiple child components can access and update it through props.");

knowledgeMap.put("what is prop drilling in react", "Prop drilling occurs when data is passed through multiple intermediate components that do not directly need the data just to reach a deeply nested component.");

knowledgeMap.put("how can prop drilling be avoided", "Prop drilling can be reduced using React Context, component composition, state management libraries, or appropriate application architecture.");

knowledgeMap.put("what is component composition in react", "Component composition is a React design pattern where components are combined using props such as children to create flexible and reusable UI structures.");

knowledgeMap.put("what is children prop in react", "The children prop contains the content placed between the opening and closing tags of a React component.");

knowledgeMap.put("what is fragment in react", "A React Fragment lets a component return multiple elements without adding an extra DOM element.");

knowledgeMap.put("what is react fragment syntax", "Fragments can be written using React.Fragment or the shorthand syntax <>...</>.");

knowledgeMap.put("what is strict mode in react", "React Strict Mode is a development feature that helps identify potential problems and unsafe patterns in React applications.");

knowledgeMap.put("what is react memo", "React.memo is a performance optimization that can skip re-rendering a component when its props have not changed according to its comparison logic.");

knowledgeMap.put("what is lazy loading in react", "Lazy loading allows components or modules to be loaded only when they are needed, which can reduce the initial JavaScript bundle size.");

knowledgeMap.put("what is react lazy", "React.lazy is an API for defining a component that is loaded dynamically using a promise-based import.");

knowledgeMap.put("what is suspense in react", "Suspense allows React to display fallback UI while certain parts of a component tree are waiting for something, such as lazy-loaded code.");

knowledgeMap.put("what is code splitting in react", "Code splitting divides application JavaScript into smaller chunks that can be loaded when needed instead of loading everything initially.");

knowledgeMap.put("what is routing in react", "Routing allows a React application to display different views or components based on the current URL.");

knowledgeMap.put("what is react router", "React Router is a popular routing library for React applications that provides navigation and URL-based rendering.");

knowledgeMap.put("how do you navigate in react", "Navigation can be implemented using a routing library such as React Router or by using browser navigation APIs when appropriate.");

knowledgeMap.put("what is single page application", "A Single Page Application is a web application that dynamically updates the displayed content without requiring a full browser page reload for every navigation.");

knowledgeMap.put("is react a framework", "React is primarily a JavaScript library for building user interfaces, although it can be used with frameworks that provide additional application features.");

knowledgeMap.put("what is the difference between react and angular", "React is primarily a UI library focused on components, while Angular is a comprehensive frontend framework that provides many built-in application features.");

knowledgeMap.put("what is the difference between react and vue", "React is a JavaScript UI library with a large ecosystem, while Vue is a progressive JavaScript framework designed for building user interfaces and applications.");

knowledgeMap.put("what is react native", "React Native is a framework for building native mobile applications using React and JavaScript or TypeScript.");

knowledgeMap.put("what is the difference between react and react native", "React is primarily used for web interfaces, while React Native is used to build native mobile applications for platforms such as Android and iOS.");

knowledgeMap.put("can react build mobile apps", "React itself targets web applications, while React Native can be used to build native mobile applications using React concepts.");

knowledgeMap.put("what is server side rendering in react", "Server-side rendering renders React UI on the server and sends HTML to the browser, which can improve initial loading and other application characteristics.");

knowledgeMap.put("what is client side rendering in react", "Client-side rendering means the browser downloads JavaScript and React renders the application's UI on the client.");

knowledgeMap.put("what is hydration in react", "Hydration is the process of attaching React behavior and event handling to HTML that was already rendered on the server.");

knowledgeMap.put("what is server components in react", "React Server Components allow certain components to render on the server without sending their component implementation to the client.");

knowledgeMap.put("what is react suspense", "React Suspense provides a mechanism for showing fallback content while parts of the UI are not yet ready to be displayed.");

knowledgeMap.put("what is error boundary in react", "An error boundary is a React component pattern that catches rendering errors in its child component tree and displays fallback UI.");

knowledgeMap.put("can functional components be error boundaries", "Traditional React error boundaries are implemented using class components, although application frameworks and newer React features can provide additional error-handling approaches.");

knowledgeMap.put("what is state management in react", "State management is the process of storing, updating, and sharing application data across React components.");

knowledgeMap.put("what is redux in react", "Redux is a predictable state management library that can be used with React to manage shared application state.");

knowledgeMap.put("what is zustand in react", "Zustand is a lightweight state management library commonly used with React for managing shared application state.");

knowledgeMap.put("what is redux toolkit", "Redux Toolkit is the recommended modern approach for writing Redux logic with utilities that simplify store configuration, reducers, actions, and immutable updates.");

knowledgeMap.put("when should you use redux", "Redux can be useful when an application has complex shared state and predictable centralized state management provides significant value.");

knowledgeMap.put("what is react query", "TanStack Query, commonly known as React Query in earlier usage, is a library for managing server state such as fetching, caching, synchronizing, and updating remote data.");

knowledgeMap.put("what is api call in react", "An API call in React is a request made by the application to a backend or external service to retrieve or send data.");

knowledgeMap.put("how do you fetch data in react", "Data can be fetched using browser APIs such as fetch, libraries such as Axios, or data-fetching libraries such as TanStack Query.");

knowledgeMap.put("how do you use fetch in react", "The fetch API can be called from appropriate React logic, often inside an effect when synchronization with a remote resource is required, with state used to store loading, data, and error information.");

knowledgeMap.put("how do you handle loading state in react", "Loading state can be represented using a boolean state value and conditional rendering to show a loading indicator while data or content is being prepared.");

knowledgeMap.put("how do you handle errors in react", "Errors can be represented in state for asynchronous operations and displayed conditionally, while rendering errors can be handled with error boundaries.");

knowledgeMap.put("how do you optimize react performance", "React performance can be improved through appropriate component structure, memoization when useful, code splitting, virtualization for large lists, efficient state management, and avoiding unnecessary work.");

knowledgeMap.put("what causes unnecessary renders in react", "Unnecessary renders can result from changing props, state updates, parent renders, unstable object or function references, or inefficient component architecture.");

knowledgeMap.put("how can you prevent unnecessary renders", "You can reduce unnecessary renders by structuring state carefully, using React.memo when appropriate, memoizing expensive calculations or callbacks when beneficial, and avoiding unnecessary state updates.");

knowledgeMap.put("what is reconciliation algorithm in react", "React's reconciliation process compares the previous and next element trees and determines which DOM updates are required.");

knowledgeMap.put("what is fiber in react", "React Fiber is React's internal architecture for representing and scheduling work on the component tree, enabling more flexible rendering and prioritization.");

knowledgeMap.put("what is concurrent rendering in react", "Concurrent rendering is a React capability that allows rendering work to be interrupted and prioritized so the interface can remain responsive.");

knowledgeMap.put("what is start transition in react", "startTransition lets developers mark certain state updates as non-urgent so React can prioritize more important UI updates.");

knowledgeMap.put("what is use transition in react", "useTransition is a React hook that provides a way to mark updates as transitions and track whether a transition is currently pending.");
	knowledgeMap.put("what is useTransition in react", "useTransition is a React hook that provides a way to mark updates as transitions and track whether a transition is currently pending.");

knowledgeMap.put("what is use deferred value in react", "useDeferredValue allows a value to be updated at a lower priority so urgent UI interactions can remain responsive.");
	knowledgeMap.put("what is useDeferredValue in react", "useDeferredValue allows a value to be updated at a lower priority so urgent UI interactions can remain responsive.");

knowledgeMap.put("what is react devtools", "React Developer Tools is a browser extension and development tool that helps developers inspect React component trees, props, state, and performance information.");

knowledgeMap.put("how do you debug react applications", "React applications can be debugged using browser developer tools, React Developer Tools, console logging, breakpoints, network inspection, and appropriate testing tools.");

knowledgeMap.put("what is testing in react", "React testing verifies that components and application behavior work as expected using tools such as React Testing Library and other JavaScript testing frameworks.");

knowledgeMap.put("what is react testing library", "React Testing Library is a testing utility that encourages testing React components from the perspective of how users interact with the application.");

knowledgeMap.put("what is jest in react", "Jest is a JavaScript testing framework that can be used to run unit and integration tests in React projects.");

knowledgeMap.put("how do you test a react component", "A React component can be tested by rendering it in a test environment, interacting with it like a user, and checking the resulting behavior or UI.");

knowledgeMap.put("what is accessibility in react", "Accessibility in React means building interfaces that can be used by people with different abilities, commonly by using semantic HTML, labels, keyboard support, and appropriate ARIA attributes.");

knowledgeMap.put("how do you improve react accessibility", "React accessibility can be improved by using semantic HTML, accessible form labels, keyboard navigation, sufficient contrast, meaningful alternative text, and ARIA only when necessary.");

knowledgeMap.put("what are common react mistakes", "Common React mistakes include mutating state directly, using unstable keys, misusing effects, unnecessary state, incorrect dependency handling, and creating unnecessary renders.");

knowledgeMap.put("what is the best way to learn react", "A good way to learn React is to understand JavaScript fundamentals first, then learn components, JSX, props, state, hooks, events, routing, data fetching, testing, and build projects.");

knowledgeMap.put("is react easy to learn", "React can be relatively easy to start with, but mastering state management, effects, performance, architecture, testing, and advanced rendering concepts requires practice.");

knowledgeMap.put("what should i learn before react", "Before learning React, it is helpful to understand HTML, CSS, JavaScript fundamentals, functions, arrays, objects, modules, asynchronous JavaScript, and modern JavaScript syntax.");

knowledgeMap.put("is javascript required for react", "Yes. React is built around JavaScript, so a solid understanding of JavaScript is important for developing React applications.");

knowledgeMap.put("is react good for beginners", "React can be a good choice for beginners who already understand basic JavaScript and want to learn component-based frontend development.");

knowledgeMap.put("what projects can i build with react", "You can build projects such as todo apps, dashboards, blogs, ecommerce interfaces, weather applications, chat applications, portfolio websites, and many other web applications with React.");


        // Constructors
        knowledgeMap.put("what is constructor", "A constructor in Java is a special method that is used to initialize objects. The constructor is called when an object of a class is created. It can be used to set initial values for object attributes.");
        knowledgeMap.put("constructor example", "Example of constructor in Java:\n\npublic class Car {\n    private String brand;\n    private String model;\n    private int year;\n    \n    // Constructor\n    public Car(String brand, String model, int year) {\n        this.brand = brand;\n        this.model = model;\n        this.year = year;\n    }\n    \n    public void displayInfo() {\n        System.out.println(\"Car: \" + brand + \" \" + model + \" \" + year);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Car car = new Car(\"Toyota\", \"Camry\", 2020);\n        car.displayInfo(); // Output: Car: Toyota Camry 2020\n    }\n}");

        // Methods
        knowledgeMap.put("what is method", "A method in Java is a block of code which only runs when it is called. You can pass data, known as parameters, into a method. Methods are used to perform certain actions and they are also known as functions.");
        knowledgeMap.put("method example", "Example of method in Java:\n\npublic class Calculator {\n    // Method that adds two numbers\n    public int add(int a, int b) {\n        return a + b;\n    }\n    \n    // Method that multiplies two numbers\n    public int multiply(int a, int b) {\n        return a * b;\n    }\n    \n    // Method with no return value (void)\n    public void printMessage(String message) {\n        System.out.println(message);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Calculator calc = new Calculator();\n        int sum = calc.add(5, 3);        // Returns 8\n        int product = calc.multiply(4, 2); // Returns 8\n        calc.printMessage(\"Hello World\"); // Prints: Hello World\n    }\n}");

        // Variables and Data Types
        knowledgeMap.put("what are variables", "Variables in Java are containers for storing data values. In Java, there are different types of variables, for example: String - stores text, such as \"Hello\". int - stores integers (whole numbers), such as 123 or -123. float - stores floating point numbers, such as 19.99 or -19.99. char - stores single characters, such as 'a' or 'B'. boolean - stores true or false values.");
        knowledgeMap.put("java data types", "Java has two categories of data types:\n\n1. Primitive Data Types: byte, short, int, long, float, double, boolean, char\n2. Non-primitive Data Types: String, Arrays, Classes (which you will learn more about in later chapters)");
        knowledgeMap.put("primitive data types example", "Example of primitive data types in Java:\n\npublic class DataTypesDemo {\n    public static void main(String[] args) {\n        byte b = 100;\n        short s = 1000;\n        int i = 100000;\n        long l = 10000000000L;\n        float f = 19.99f;\n        double d = 19.99;\n        boolean bool = true;\n        char c = 'A';\n        \n        System.out.println(\"byte: \" + b);\n        System.out.println(\"short: \" + s);\n        System.out.println(\"int: \" + i);\n        System.out.println(\"long: \" + l);\n        System.out.println(\"float: \" + f);\n        System.out.println(\"double: \" + d);\n        System.out.println(\"boolean: \" + bool);\n        System.out.println(\"char: \" + c);\n    }\n}");

        // Operators
        knowledgeMap.put("what are operators", "Operators in Java are special symbols that perform specific operations on one, two, or three operands, and then return a result. Java provides many types of operators which can be classified into different groups: Arithmetic Operators, Assignment Operators, Comparison Operators, Logical Operators, Bitwise Operators, etc.");
        knowledgeMap.put("operators example", "Example of operators in Java:\n\npublic class OperatorsDemo {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = 3;\n        \n        // Arithmetic operators\n        System.out.println(\"a + b = \" + (a + b)); // 13\n        System.out.println(\"a - b = \" + (a - b)); // 7\n        System.out.println(\"a * b = \" + (a * b)); // 30\n        System.out.println(\"a / b = \" + (a / b)); // 3\n        System.out.println(\"a % b = \" + (a % b)); // 1\n        \n        // Comparison operators\n        System.out.println(\"a > b: \" + (a > b)); // true\n        System.out.println(\"a == b: \" + (a == b)); // false\n        \n        // Logical operators\n        boolean x = true;\n        boolean y = false;\n        System.out.println(\"x && y: \" + (x && y)); // false\n        System.out.println(\"x || y: \" + (x || y)); // true\n        System.out.println(\"!x: \" + (!x)); // false\n    }\n}");

        // Loops
        knowledgeMap.put("what are loops", "Loops in Java are used to execute a block of code repeatedly as long as a specified condition is true. Java provides several loop mechanisms: for loop, while loop, do-while loop, and enhanced for loop (for-each).");
        knowledgeMap.put("loops example", "Example of loops in Java:\n\npublic class LoopsDemo {\n    public static void main(String[] args) {\n        System.out.println(\"For loop:\");\n        for (int i = 1; i <= 5; i++) {\n            System.out.print(i + \" \"); // Output: 1 2 3 4 5\n        }\n        System.out.println();\n        \n        System.out.println(\"While loop:\");\n        int i = 1;\n        while (i <= 5) {\n            System.out.print(i + \" \"); // Output: 1 2 3 4 5\n            i++;\n        }\n        System.out.println();\n        \n        System.out.println(\"Do-while loop:\");\n        i = 1;\n        do {\n            System.out.print(i + \" \"); // Output: 1 2 3 4 5\n            i++;\n        } while (i <= 5);\n        System.out.println();\n        \n        System.out.println(\"Enhanced for loop:\");\n        int[] numbers = {1, 2, 3, 4, 5};\n        for (int num : numbers) {\n            System.out.print(num + \" \"); // Output: 1 2 3 4 5\n        }\n        System.out.println();\n    }\n}");

        // Conditional Statements
        knowledgeMap.put("what are conditional statements", "Conditional statements in Java are used to perform different actions based on different conditions. Java has the following conditional statements: if, if-else, if-else-if ladder, nested if, and switch.");
        knowledgeMap.put("conditional statements example", "Example of conditional statements in Java:\n\npublic class ConditionalDemo {\n    public static void main(String[] args) {\n        int score = 85;\n        \n        // if statement\n        if (score >= 90) {\n            System.out.println(\"Grade: A\");\n        }\n        \n        // if-else statement\n        if (score >= 80) {\n            System.out.println(\"Grade: B\");\n        } else {\n            System.out.println(\"Grade: C\");\n        }\n        \n        // if-else-if ladder\n        if (score >= 90) {\n            System.out.println(\"Grade: A\");\n        } else if (score >= 80) {\n            System.out.println(\"Grade: B\");\n        } else if (score >= 70) {\n            System.out.println(\"Grade: C\");\n        } else {\n            System.out.println(\"Grade: D\");\n        }\n        \n        // switch statement\n        char grade = 'B';\n        switch (grade) {\n            case 'A':\n                System.out.println(\"Excellent!\");\n                break;\n            case 'B':\n                System.out.println(\"Good!\");\n                break;\n            case 'C':\n                System.out.println(\"Average!\");\n                break;\n            default:\n                System.out.println(\"Invalid grade\");\n        }\n    }\n}");

        // Arrays
        knowledgeMap.put("what is array", "An array in Java is a container object that holds a fixed number of values of a single type. The length of an array is established when the array is created. After creation, its length is fixed.");
        knowledgeMap.put("array example", "Example of array in Java:\n\npublic class ArrayDemo {\n    public static void main(String[] args) {\n        // Declaration and initialization\n        int[] numbers = new int[5]; // Array of size 5\n        \n        // Assigning values\n        numbers[0] = 10;\n        numbers[1] = 20;\n        numbers[2] = 30;\n        numbers[3] = 40;\n        numbers[4] = 50;\n        \n        // Accessing elements\n        System.out.println(\"First element: \" + numbers[0]); // 10\n        System.out.println(\"Third element: \" + numbers[2]); // 30\n        \n        // Using enhanced for loop\n        System.out.print(\"All elements: \");\n        for (int num : numbers) {\n            System.out.print(num + \" \"); // Output: 10 20 30 40 50\n        }\n        System.out.println();\n        \n        // Alternative initialization\n        int[] moreNumbers = {1, 2, 3, 4, 5};\n        System.out.println(\"Length of moreNumbers: \" + moreNumbers.length); // 5\n    }\n}");

        // Strings
        knowledgeMap.put("what is string", "In Java, a string is a sequence of characters. The String class is used to create and manipulate strings. Strings in Java are immutable, meaning once created, they cannot be changed.");
        knowledgeMap.put("string example", "Example of String in Java:\n\npublic class StringDemo {\n    public static void main(String[] args) {\n        // Creating strings\n        String greeting = \"Hello, World!\";\n        String name = \"John\";\n        \n        // String methods\n        System.out.println(\"Length: \" + greeting.length()); // 13\n        System.out.println(\"Uppercase: \" + greeting.toUpperCase()); // HELLO, WORLD!\n        System.out.println(\"Contains 'World': \" + greeting.contains(\"World\")); // true\n        System.out.println(\"Substring: \" + greeting.substring(0, 5)); // Hello\n        \n        // String concatenation\n        String message = greeting + \" My name is \" + name;\n        System.out.println(message); // Hello, World! My name is John\n        \n        // String comparison\n        String str1 = \"Hello\";\n        String str2 = \"Hello\";\n        String str3 = \"hello\";\n        \n        System.out.println(\"str1.equals(str2): \" + str1.equals(str2)); // true\n        System.out.println(\"str1.equals(str3): \" + str1.equals(str3)); // false\n        System.out.println(\"str1.equalsIgnoreCase(str3): \" + str1.equalsIgnoreCase(str3)); // true\n    }\n}");

        // StringBuilder and StringBuffer
        knowledgeMap.put("what is stringbuilder", "StringBuilder in Java is a mutable sequence of characters. It provides an alternative to String class, especially when you need to make many modifications to a string. Unlike String, StringBuilder objects can be modified after they are created.");
        knowledgeMap.put("stringbuilder vs stringbuffer", "Both StringBuilder and StringBuffer are used to create mutable strings in Java. The key difference is that StringBuffer is thread-safe (synchronized) while StringBuilder is not. StringBuilder is faster and preferred in single-threaded environments.");
        knowledgeMap.put("stringbuilder example", "Example of StringBuilder in Java:\n\npublic class StringBuilderDemo {\n    public static void main(String[] args) {\n        // Creating StringBuilder\n        StringBuilder sb = new StringBuilder();\n        \n        // Appending strings\n        sb.append(\"Hello\");\n        sb.append(\", \");\n        sb.append(\"World\");\n        \n        // Inserting string\n        sb.insert(5, \" Beautiful\");\n        \n        // Replacing characters\n        sb.replace(6, 15, \"Universe\");\n        \n        // Deleting characters\n        sb.delete(0, 5);\n        \n        // Reversing\n        sb.reverse();\n        \n        System.out.println(sb.toString()); // Output: !esrevinU lufituaeb\n        \n        // Alternative way\n        StringBuilder sb2 = new StringBuilder(\"Java\");\n        sb2.append(\" Programming\");\n        System.out.println(sb2.toString()); // Output: Java Programming\n    }\n}");

        // Exception Handling
        knowledgeMap.put("what is exception handling", "Exception handling in Java is a mechanism to handle runtime errors such as ClassNotFoundException, IOException, SQLException, RemoteException, etc. The main advantage of exception handling is to maintain the normal flow of the application.");
        knowledgeMap.put("exception handling example", "Example of exception handling in Java:\n\npublic class ExceptionHandlingDemo {\n    public static void main(String[] args) {\n        try {\n            int[] numbers = {1, 2, 3};\n            System.out.println(numbers[5]); // This will throw ArrayIndexOutOfBoundsException\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"Array index is out of bounds!\");\n            System.out.println(\"Error message: \" + e.getMessage());\n        } catch (Exception e) {\n            System.out.println(\"Some other exception occurred\");\n        } finally {\n            System.out.println(\"This block always executes\");\n        }\n        \n        System.out.println(\"Program continues after exception handling\");\n    }\n}");

        // Collections
        knowledgeMap.put("what are collections", "The Java Collections Framework is a unified architecture for representing and manipulating collections. It contains:\n- Interfaces: List, Set, Queue, Map\n- Implementations: ArrayList, LinkedList, HashSet, TreeSet, HashMap, TreeMap, etc.\n- Algorithms: sorting, searching, etc.");
        knowledgeMap.put("what is arraylist", "ArrayList in Java is a resizable array implementation of the List interface. It allows random access to elements and maintains insertion order. It's part of the java.util package.");
        knowledgeMap.put("what is linkedlist", "LinkedList in Java is a doubly-linked list implementation of the List and Deque interfaces. It provides constant-time insertions and removals using iterators, but sequential access is slower compared to ArrayList.");
        knowledgeMap.put("difference between arraylist and linkedlist", "Difference between ArrayList and LinkedList in Java:\n\nArrayList:\n- Implements List interface using a dynamic array\n- Random access O(1)\n- Insertion/deletion at beginning/middle O(n)\n- Better for frequent read operations\n- Memory overhead is lower\n\nLinkedList:\n- Implements List and Deque interfaces using a doubly-linked list\n- Random access O(n)\n- Insertion/deletion at beginning/end O(1)\n- Better for frequent insertions/deletions\n- Higher memory overhead due to storing previous/next references\n\nWhen to use which:\n- Use ArrayList when you need frequent access by index\n- Use LinkedList when you need frequent insertions/deletions from the beginning or end");
        knowledgeMap.put("arraylist example", "Example of ArrayList in Java:\n\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class ArrayListDemo {\n    public static void main(String[] args) {\n        // Creating ArrayList\n        List<String> fruits = new ArrayList<>();\n        \n        // Adding elements\n        fruits.add(\"Apple\");\n        fruits.add(\"Banana\");\n        fruits.add(\"Cherry\");\n        \n        // Accessing elements\n        System.out.println(\"First fruit: \" + fruits.get(0)); // Apple\n        \n        // Iterating\n        System.out.print(\"All fruits: \");\n        for (String fruit : fruits) {\n            System.out.print(fruit + \" \"); // Output: Apple Banana Cherry\n        }\n        System.out.println();\n        \n        // Removing element\n        fruits.remove(1); // Removes Banana\n        System.out.println(\"After removal: \" + fruits); // [Apple, Cherry]\n    }\n}");

        // HashMap
        knowledgeMap.put("what is hashmap", "HashMap in Java is a Map based collection class that is used for storing Key & value pairs. It is denoted as HashMap<Key, Value> or HashMap<K, V>. It makes use of the hash function and allows duplicate values while keys must be unique.");
        knowledgeMap.put("hashmap example", "Example of HashMap in Java:\n\nimport java.util.HashMap;\nimport java.util.Map;\n\npublic class HashMapDemo {\n    public static void main(String[] args) {\n        // Creating HashMap\n        Map<String, Integer> studentScores = new HashMap<>();\n        \n        // Adding key-value pairs\n        studentScores.put(\"Alice\", 85);\n        studentScores.put(\"Bob\", 92);\n        studentScores.put(\"Charlie\", 78);\n        \n        // Accessing values\n        System.out.println(\"Alice's score: \" + studentScores.get(\"Alice\")); // 85\n        \n        // Checking if key exists\n        System.out.println(\"Contains 'David': \" + studentScores.containsKey(\"David\")); // false\n        \n        // Iterating through keys\n        System.out.print(\"Students: \");\n        for (String name : studentScores.keySet()) {\n            System.out.print(name + \" \"); // Output: Alice Bob Charlie\n        }\n        System.out.println();\n        \n        // Iterating through values\n        System.out.print(\"Scores: \");\n        for (Integer score : studentScores.values()) {\n            System.out.print(score + \" \"); // Output: 85 92 78\n        }\n        System.out.println();\n        \n        // Removing entry\n        studentScores.remove(\"Bob\");\n        System.out.println(\"After removing Bob: \" + studentScores); // {Alice=85, Charlie=78}\n    }\n}");

        // Generics
        knowledgeMap.put("what are generics", "Generics in Java is a feature that allows types (classes and interfaces) to be parameters when defining classes, interfaces and methods. It provides compile-time type safety and eliminates the need for casting.");
        knowledgeMap.put("generics example", "Example of Generics in Java:\n\n// Without generics (raw type)\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class GenericsDemo {\n    public static void main(String[] args) {\n        // Without generics - unsafe\n        List rawList = new ArrayList();\n        rawList.add(\"Hello\");\n        rawList.add(100); // Can add any type\n        \n        // With generics - type safe\n        List<String> stringList = new ArrayList<>();\n        stringList.add(\"Hello\");\n        // stringList.add(100); // Compile-time error!\n        \n        // Retrieving elements\n        String str = stringList.get(0); // No casting needed\n        System.out.println(\"String from list: \" + str);\n    }\n}");

        // Java 8+ Features
        knowledgeMap.put("what is lambda expression", "A lambda expression in Java is a short block of code which takes in parameters and returns a value. Lambda expressions are similar to methods, but they do not need a name and they can be implemented right in the body of a method.");
        knowledgeMap.put("lambda expression example", "Example of lambda expression in Java:\n\nimport java.util.ArrayList;\nimport java.util.Collections;\nimport java.util.List;\n\npublic class LambdaDemo {\n    public static void main(String[] args) {\n        List<String> names = new ArrayList<>();\n        names.add(\"Alice\");\n        names.add(\"Bob\");\n        names.add(\"Charlie\");\n        \n        // Before Java 8 - using anonymous inner class\n        Collections.sort(names, new java.util.Comparator<String>() {\n            @Override\n            public int compare(String s1, String s2) {\n                return s1.compareTo(s2);\n            }\n        });\n        \n        // Java 8+ - using lambda expression\n        Collections.sort(names, (s1, s2) -> s1.compareTo(s2));\n        \n        // Even more concise\n        Collections.sort(names, String::compareTo);\n        \n        System.out.println(\"Sorted names: \" + names); // Output: [Alice, Bob, Charlie]\n        \n        // Lambda with multiple parameters\n        java.util.BiFunction<Integer, Integer, Integer> adder = (a, b) -> a + b;\n        System.out.println(\"5 + 3 = \" + adder.apply(5, 3)); // Output: 8\n    }\n}");

        knowledgeMap.put("what is stream api", "The Stream API in Java is used to process collections of objects. A stream is a sequence of objects that supports various methods which can be pipelined to produce the desired result. It allows functional-style operations on streams of elements.");
        knowledgeMap.put("stream api example", "Example of Stream API in Java:\n\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\npublic class StreamDemo {\n    public static void main(String[] args) {\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n        \n        // Filter even numbers and square them\n        List<Integer> squaredEvens = numbers.stream()\n                .filter(n -> n % 2 == 0)  // Filter even numbers\n                .map(n -> n * n)          // Square each number\n                .collect(Collectors.toList());\n        \n        System.out.println(\"Original numbers: \" + numbers);\n        System.out.println(\"Squared evens: \" + squaredEvens); // [4, 16, 36, 64, 100]\n        \n        // Find sum of numbers greater than 5\n        int sum = numbers.stream()\n                .filter(n -> n > 5)\n                .mapToInt(Integer::intValue)\n                .sum();\n        \n        System.out.println(\"Sum of numbers > 5: \" + sum); // 40\n        \n        // Find average\n        double average = numbers.stream()\n                .mapToInt(Integer::intValue)\n                .average()\n                .orElse(0.0);\n        \n        System.out.println(\"Average: \" + average); // 5.5\n    }\n}");

        knowledgeMap.put("what is optional", "Optional in Java is a container object which may or may not contain a non-null value. It is used to represent null with absent value. This class provides various utility methods to facilitate code to handle values as 'available' or 'not available' instead of checking null values.");
        knowledgeMap.put("optional example", "Example of Optional in Java:\n\nimport java.util.Optional;\n\npublic class OptionalDemo {\n    public static void main(String[] args) {\n        Optional<String> optionalString = Optional.of(\"Hello World\");\n        \n        // Check if value is present\n        System.out.println(\"Is present: \" + optionalString.isPresent()); // true\n        \n        // Get value if present\n        if (optionalString.isPresent()) {\n            String value = optionalString.get();\n            System.out.println(\"Value: \" + value); // Hello World\n        }\n        \n        // Alternative ways to get value\n        String valueOrDefault = optionalString.orElse(\"Default Value\");\n        System.out.println(\"Value or default: \" + valueOrDefault); // Hello World\n        \n        String valueOrElseGet = optionalString.orElseGet(() -> \"Generated Default\");\n        System.out.println(\"Value or else get: \" + valueOrElseGet); // Hello World\n        \n        // When Optional is empty\n        Optional<String> emptyOptional = Optional.empty();\n        System.out.println(\"Empty optional value: \" + emptyOptional.orElse(\"No Value\")); // No Value\n        \n        // Using ifPresent\n        optionalString.ifPresent(value -> System.out.println(\"Value is: \" + value)); // Prints: Value is: Hello World\n    }\n}");

        // Multithreading
        knowledgeMap.put("what is multithreading", "Multithreading in Java is a process of executing multiple threads simultaneously to maximize CPU utilization. A thread is a lightweight sub-process, the smallest unit of processing. Multithreading allows us to write programs that can perform multiple tasks concurrently.");
        knowledgeMap.put("multithreading example", "Example of multithreading in Java:\n\npublic class MultithreadingDemo {\n    public static void main(String[] args) {\n        // Creating thread by extending Thread class\n        Thread thread1 = new Thread(() -> {\n            for (int i = 1; i <= 5; i++) {\n                System.out.println(\"Thread 1: \" + i);\n                try { Thread.sleep(500); } catch (InterruptedException e) {}\n            }\n        });\n        \n        // Creating thread by implementing Runnable interface\n        Thread thread2 = new Thread(() -> {\n            for (int i = 1; i <= 5; i++) {\n                System.out.println(\"Thread 2: \" + i);\n                try { Thread.sleep(500); } catch (InterruptedException e) {}\n            }\n        });\n        \n        // Starting threads\n        thread1.start();\n        thread2.start();\n        \n        // Main thread continues\n        for (int i = 1; i <= 3; i++) {\n            System.out.println(\"Main thread: \" + i);\n            try { Thread.sleep(500); } catch (InterruptedException e) {}\n        }\n        \n        try {\n            thread1.join();\n            thread2.join();\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n        \n        System.out.println(\"All threads finished\");\n    }\n}");

        // JVM
        knowledgeMap.put("what is jvm", "The Java Virtual Machine (JVM) is a virtual machine that enables a computer to run Java programs as well as programs written in other languages that are also compiled to Java bytecode. The JVM acts as a runtime engine which calls the main method present in the Java code.");
        knowledgeMap.put("jvm explanation", "The JVM is responsible for:\n- Loading code\n- Verifying code\n- Executing code\n- Providing runtime environment\n\nIt provides platform independence by interpreting bytecode specific to the underlying operating system and hardware combination.");

        // Spring Boot
        knowledgeMap.put("what is spring boot", "Spring Boot is an open-source Java-based framework used to create a micro Service. It is developed by Pivotal Team and is used to build stand-alone and production ready spring applications. It provides defaults for code and annotation configuration to quick start new Spring projects.");
        knowledgeMap.put("spring boot example", "Example of a simple Spring Boot REST controller:\n\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class HelloController {\n    \n    @GetMapping(\"/hello\")\n    public String sayHello() {\n        return \"Hello, World!\";\n    }\n}\n\nThis creates a REST endpoint at /hello that returns \"Hello, World!\" when accessed via GET request.");

        knowledgeMap.put("what is dependency injection", "Dependency Injection (DI) in Spring is a design pattern in which an object receives other objects that it depends on. These other objects are called dependencies. In the typical \"using\" relationship the receiving object is called a client and the passed object is called a service.");
        knowledgeMap.put("dependency injection example", "Example of Dependency Injection in Spring:\n\n@Service\npublic class UserService {\n    private final UserRepository userRepository;\n    \n    // Constructor injection\n    public UserService(UserRepository userRepository) {\n        this.userRepository = userRepository;\n    }\n    \n    public User findUserById(Long id) {\n        return userRepository.findById(id).orElse(null);\n    }\n}\n\n@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    private final UserService userService;\n    \n    // Constructor injection\n    public UserController(UserService userService) {\n        this.userService = userService;\n    }\n    \n    @GetMapping(\"/{id}\")\n    public ResponseEntity<User> getUser(@PathVariable Long id) {\n        User user = userService.findUserById(id);\n        if (user == null) {\n            return ResponseEntity.notFound().build();\n        }\n        return ResponseEntity.ok(user);\n    }\n}");


knowledgeMap.put(
    "What is the history of Sonbhadra district?",
    "Sonbhadra has a long history associated with the Vindhyan region, prehistoric rock shelters, ancient settlements, forts, tribal communities, and later industrial development. The district was created from Mirzapur district in 1989."
);

knowledgeMap.put(
    "When was Sonbhadra district established?",
    "Sonbhadra district was established on 4 March 1989 after being separated from Mirzapur district."
);

knowledgeMap.put(
    "What was Sonbhadra called in the past?",
    "The area forming present-day Sonbhadra was historically part of the larger Mirzapur region and was associated with ancient Vindhyan territories and several local kingdoms."
);

knowledgeMap.put(
    "How did Sonbhadra get its name?",
    "The district is named after the Son River, one of the major rivers associated with the region."
);

knowledgeMap.put(
    "What is the historical importance of Sonbhadra?",
    "Sonbhadra is historically important for its prehistoric rock paintings, archaeological remains, forts, tribal heritage, ancient religious traditions, and its location in the Vindhyan landscape."
);

knowledgeMap.put(
    "Which ancient regions were connected with Sonbhadra?",
    "The region has historical connections with the Vindhya and Kaimur areas and has been influenced by several kingdoms and cultural regions of northern and central India."
);

knowledgeMap.put(
    "What evidence of ancient civilization has been found in Sonbhadra?",
    "Archaeological evidence includes prehistoric rock shelters and paintings, stone tools, ancient settlements, sculptures, inscriptions, and other remains."
);

knowledgeMap.put(
    "How old are the fossils found in Sonbhadra?",
    "Some fossil evidence in Sonbhadra, particularly at Salkhan, is associated with very ancient Precambrian geological formations and stromatolitic structures."
);

knowledgeMap.put(
    "Which prehistoric caves are found in Sonbhadra?",
    "Sonbhadra contains prehistoric rock shelters and caves associated with sites such as Lakhania and other Vindhyan archaeological locations."
);

knowledgeMap.put(
    "Where can rock paintings be found in Sonbhadra?",
    "Prehistoric rock paintings can be found at several rock shelters in the Vindhyan and Kaimur landscapes of Sonbhadra, including areas around Robertsganj and Churk."
);

knowledgeMap.put(
    "What is the history of prehistoric cave paintings in Sonbhadra?",
    "The rock paintings represent prehistoric human activity and commonly depict animals, hunting scenes, human figures, geometric forms, and everyday activities."
);

knowledgeMap.put(
    "How is Sonbhadra connected with the Vindhya region?",
    "Sonbhadra lies in the Vindhyan landscape and contains plateaus, hills, valleys, forests, rock shelters, and geological formations characteristic of the region."
);

knowledgeMap.put(
    "Which ancient dynasties ruled or influenced Sonbhadra?",
    "Different parts of the wider region were influenced at different times by dynasties and kingdoms including the Mauryas, Guptas, Pratiharas, Chandelas and later regional rulers."
);

knowledgeMap.put(
    "Which kings ruled the Sonbhadra region?",
    "The region was controlled by different local and regional rulers over time. Historical traditions particularly associate several forts with local Rajput and other ruling families."
);

knowledgeMap.put(
    "What was the influence of the Chandela rulers in Sonbhadra?",
    "The Chandelas influenced parts of the Vindhyan region, and traditions connect their period with fortifications, temples and political activity in areas surrounding present-day Sonbhadra."
);

knowledgeMap.put(
    "What is the history of Vijaygarh Fort?",
    "Vijaygarh Fort is an important historical site in Sonbhadra associated with medieval regional rulers and local legends. Its remains include fortifications and archaeological features."
);

knowledgeMap.put(
    "What is the history of Agori Fort?",
    "Agori Fort is a historic fort in the Sonbhadra region associated with local rulers and the medieval political history of the Vindhyan area."
);

knowledgeMap.put(
    "Who built the old forts of Sonbhadra?",
    "The forts were constructed or developed by different regional ruling families over several historical periods; precise builders and dates vary by fort and are sometimes preserved mainly through local traditions."
);

knowledgeMap.put(
    "What ancient trade routes passed through Sonbhadra?",
    "The region's location between the Ganga plains and central India made its valleys and river corridors useful for movement, trade and communication between northern and eastern India."
);

knowledgeMap.put(
    "What was Sonbhadra's history during the Mughal period?",
    "During the Mughal period, the wider region was incorporated into changing administrative and political arrangements under Mughal authority and local chiefs."
);

knowledgeMap.put(
    "What was Sonbhadra's history during British rule?",
    "During British rule, present-day Sonbhadra was part of the larger Mirzapur administrative region. Forests, land revenue, transport and resource extraction became increasingly important."
);

knowledgeMap.put(
    "What role did Sonbhadra play in India's freedom movement?",
    "People from the wider Mirzapur-Sonbhadra region participated in nationalist and anti-colonial activities, although Sonbhadra was not a major single center of the national movement."
);

knowledgeMap.put(
    "Who were the freedom fighters associated with Sonbhadra?",
    "Freedom activists from the wider Mirzapur region and local communities participated in the national movement. Specific associations should be verified against district archival records."
);

knowledgeMap.put(
    "What are the major historical sites in Sonbhadra?",
    "Major historical attractions include Vijaygarh Fort, Agori Fort, prehistoric rock shelters and paintings, archaeological sites, ancient temples and other heritage locations."
);

knowledgeMap.put(
    "Which archaeological sites are found in Sonbhadra?",
    "Sonbhadra has prehistoric rock shelters, painted shelters, ancient sculptures, inscriptions and archaeological remains distributed across its Vindhyan landscape."
);

knowledgeMap.put(
    "What was the ancient culture of Sonbhadra like?",
    "Ancient culture in the region was shaped by forest communities, prehistoric hunter-gatherers, agriculture, river systems, trade routes and interactions among different cultural groups."
);

knowledgeMap.put(
    "What is the history of tribal communities in Sonbhadra?",
    "Tribal communities have a long-standing presence in Sonbhadra and have contributed substantially to the district's cultural traditions, agriculture, forest-based livelihoods, music, festivals and crafts."
);

knowledgeMap.put(
    "What is the history of the Gond community in Sonbhadra?",
    "The Gond community has a long historical presence in the forests and adjoining areas of the Vindhyan and central Indian region and maintains distinctive cultural traditions."
);

knowledgeMap.put(
    "What is the history of the Kol community in Sonbhadra?",
    "The Kol community has a long association with the Vindhyan forest region and has historically depended on agriculture, forests and other local resources."
);

knowledgeMap.put(
    "What is the historical heritage of Sonbhadra?",
    "Sonbhadra's heritage includes prehistoric rock art, fossils, forts, temples, archaeological remains, tribal traditions, forests, rivers and industrial heritage."
);

knowledgeMap.put(
    "What archaeological discoveries have been made in Sonbhadra?",
    "Discoveries include prehistoric paintings, rock shelters, stone tools, sculptures, inscriptions and other archaeological remains."
);

knowledgeMap.put(
    "What prehistoric evidence has been found in Sonbhadra?",
    "Prehistoric evidence includes rock shelters, paintings, stone tools and other remains indicating human activity in the Vindhyan landscape over long periods."
);

knowledgeMap.put(
    "How old are the rock paintings of Sonbhadra?",
    "The paintings belong to different prehistoric and later periods, so their ages vary considerably; individual sites require archaeological dating rather than a single age."
);

knowledgeMap.put(
    "Where are prehistoric paintings located in Sonbhadra?",
    "Prehistoric paintings occur in rock shelters across the Vindhyan and Kaimur landscapes, including locations around Robertsganj and other parts of the district."
);

knowledgeMap.put(
    "What do the rock paintings of Sonbhadra depict?",
    "They commonly depict animals, hunting scenes, human figures, groups of people, geometric designs and activities associated with prehistoric life."
);

knowledgeMap.put(
    "What is the archaeological importance of Sonbhadra?",
    "Sonbhadra is archaeologically important because its rock shelters, paintings, fossils, sculptures, inscriptions and ancient remains provide evidence of long-term human and geological history."
);

knowledgeMap.put(
    "What is the prehistoric importance of Sonbhadra?",
    "The district preserves important evidence of prehistoric human occupation and artistic activity, particularly through its rock shelters and paintings."
);

knowledgeMap.put(
    "Which ancient civilizations are associated with Sonbhadra?",
    "Sonbhadra was not the center of a single named ancient civilization; instead, it formed part of several cultural and political zones of the Vindhyan and Ganga-central Indian region."
);

knowledgeMap.put(
    "What ancient settlements have been discovered in Sonbhadra?",
    "Archaeological investigations have identified ancient habitation and activity sites, although the evidence varies considerably from one location to another."
);

knowledgeMap.put(
    "What historical monuments are located in Sonbhadra?",
    "Important monuments include Vijaygarh Fort, Agori Fort, ancient temples, rock shelters, sculptures and other archaeological remains."
);

knowledgeMap.put(
    "What role did local rulers play in Sonbhadra's history?",
    "Local rulers controlled strategic forts, land and settlements and interacted with larger regional powers that governed the Vindhyan area."
);

knowledgeMap.put(
    "Which kingdoms controlled parts of present-day Sonbhadra?",
    "Different areas came under different regional powers over time, including major north Indian dynasties and local ruling families."
);

knowledgeMap.put(
    "What was the political history of Sonbhadra?",
    "The political history of Sonbhadra reflects successive regional kingdoms, local chiefs, Mughal-era administration, British administration through Mirzapur and finally the creation of the modern district in 1989."
);

knowledgeMap.put(
    "What was the social history of Sonbhadra?",
    "Sonbhadra's social history has been shaped by tribal communities, rural agricultural populations, forest-dependent communities, migration and the growth of industrial townships."
);

knowledgeMap.put(
    "What was the economic history of Sonbhadra?",
    "The economy historically depended on agriculture, forests and local resources before undergoing major transformation through mining, manufacturing and large-scale power generation."
);

knowledgeMap.put(
    "What was the religious history of Sonbhadra?",
    "Religious traditions include Shaivism, Shaktism, Vaishnav traditions, local deity worship and tribal religious practices, reflected in temples, fairs and festivals."
);

knowledgeMap.put(
    "How did tribal culture influence Sonbhadra's history?",
    "Tribal communities strongly influenced local music, dance, festivals, crafts, food traditions, forest knowledge and village social life."
);

knowledgeMap.put(
    "What is the history of the Son River region?",
    "The Son River has long been an important geographical corridor linking the Vindhyan plateau with the Ganga basin and has influenced settlement, agriculture and regional movement."
);

knowledgeMap.put(
    "How has the Vindhya landscape influenced Sonbhadra's history?",
    "The hills, plateaus, forests, rivers and rock shelters of the Vindhya landscape shaped settlement patterns, agriculture, defensive sites, tribal livelihoods and prehistoric habitation."
);

knowledgeMap.put(
    "What historical importance does the Kaimur region have in Sonbhadra?",
    "The Kaimur landscape contains important prehistoric rock shelters, archaeological remains, forests and routes connecting the Ganga plains with central and eastern India."
);

knowledgeMap.put(
    "What is the history of Robertsganj?",
    "Robertsganj developed as an important administrative and commercial center of the region and became the headquarters of Sonbhadra district after its creation."
);

knowledgeMap.put(
    "How did Robertsganj get its name?",
    "Robertsganj was named during the British period after Robert, a British official associated with the area."
);

knowledgeMap.put(
    "What is the history of Renukoot?",
    "Renukoot developed rapidly as an industrial town, particularly after the establishment of major aluminium and related industries."
);

knowledgeMap.put(
    "How did Renukoot develop?",
    "Renukoot expanded through industrialization, especially with the growth of aluminium manufacturing and supporting infrastructure."
);

knowledgeMap.put(
    "What is the history of Obra?",
    "Obra developed into a major power-generation center, particularly through the establishment and expansion of thermal power facilities."
);

knowledgeMap.put(
    "What is the history of Shaktinagar?",
    "Shaktinagar developed as a major energy and coal-related industrial area, with large power projects and associated infrastructure."
);

knowledgeMap.put(
    "What is the history of Dudhi?",
    "Dudhi is an important town and administrative area in southeastern Sonbhadra, serving surrounding rural and tribal communities."
);

knowledgeMap.put(
    "What is the history of Anpara?",
    "Anpara developed into a major thermal-power center and became one of the important industrial locations in Sonbhadra."
);

knowledgeMap.put(
    "What is the history of Chopan?",
    "Chopan developed as an important railway and transport center connecting the Sonbhadra region with neighboring areas."
);

knowledgeMap.put(
    "What is the history of Ghorawal?",
    "Ghorawal is an important historical and administrative area in western Sonbhadra with connections to the Vindhyan archaeological landscape."
);

knowledgeMap.put(
    "What historical places are found around Robertsganj?",
    "The surrounding area contains prehistoric rock shelters and paintings, archaeological locations, temples and other heritage sites."
);

knowledgeMap.put(
    "What historical places are found around Renukoot?",
    "Renukoot and its surrounding area contain religious sites, industrial heritage and access to several natural and historical attractions."
);

knowledgeMap.put(
    "What historical places are found around Dudhi?",
    "The Dudhi area has temples, tribal cultural sites, forests, archaeological locations and access to natural attractions."
);

knowledgeMap.put(
    "What historical places are found around Ghorawal?",
    "The Ghorawal area is associated with prehistoric rock shelters, paintings, archaeological remains and historic religious sites."
);

knowledgeMap.put(
    "What historical places are found around Chopan?",
    "Chopan provides access to historic and religious locations as well as the wider Vindhyan landscape and river valleys."
);

knowledgeMap.put(
    "What historical stories are associated with Sonbhadra?",
    "Local traditions include stories connected with ancient kings, forts, temples, sages, rivers and tribal communities."
);

knowledgeMap.put(
    "Which legends are associated with Sonbhadra?",
    "Many local legends connect forts, temples, rivers and caves with ancient rulers, Hindu deities and sages."
);

knowledgeMap.put(
    "What mythological significance does Sonbhadra have?",
    "Several locations in Sonbhadra are associated through local tradition with Hindu mythology, particularly stories involving Shiva, Shakti, sages and sacred rivers."
);

knowledgeMap.put(
    "What is the connection between Sonbhadra and ancient Hindu traditions?",
    "Ancient temples, sacred rivers, local pilgrimage traditions and festivals have contributed to Sonbhadra's Hindu religious heritage."
);

knowledgeMap.put(
    "Which ancient temples are linked to Sonbhadra's history?",
    "Shivdwar and other old Shiva and Devi shrines are among the religious sites associated with the district's historical and local traditions."
);

knowledgeMap.put(
    "What historical caves are found in Sonbhadra?",
    "Sonbhadra has numerous prehistoric rock shelters and caves, particularly within the Vindhyan and Kaimur hills."
);

knowledgeMap.put(
    "What ancient inscriptions have been found in Sonbhadra?",
    "Inscriptions and inscribed archaeological remains have been reported from historical sites in the district, although their dates and interpretations differ by site."
);

knowledgeMap.put(
    "What ancient sculptures have been found in Sonbhadra?",
    "Archaeological sites and temples contain stone sculptures and images associated with Hindu religious traditions and different historical periods."
);

knowledgeMap.put(
    "What ancient statues have been discovered in Sonbhadra?",
    "Stone images of Hindu deities and other archaeological sculptures have been found at various historical and religious sites."
);

knowledgeMap.put(
    "What historical artifacts have been discovered in Sonbhadra?",
    "Artifacts include stone tools, pottery, sculptures, inscriptions and other archaeological objects associated with prehistoric and historic settlements."
);

knowledgeMap.put(
    "What is the history of local tribal art in Sonbhadra?",
    "Tribal art developed through traditions of painting, decorative work, weaving, craft production, music and ceremonial practices closely connected with community life and nature."
);

knowledgeMap.put(
    "What traditional occupations existed historically in Sonbhadra?",
    "Traditional occupations included agriculture, livestock rearing, forest-product collection, hunting in earlier periods, pottery, weaving, metalwork and other village crafts."
);

knowledgeMap.put(
    "How did agriculture develop in Sonbhadra?",
    "Agriculture developed around river valleys, plains and suitable plateau areas, with farming gradually supported by wells, reservoirs, canals and other irrigation sources."
);

knowledgeMap.put(
    "How did mining influence the history of Sonbhadra?",
    "Mining, especially coal and limestone extraction, transformed Sonbhadra's economy and contributed to the development of industrial and power-generating centers."
);

knowledgeMap.put(
    "How did industries change Sonbhadra?",
    "Large industries brought urbanization, employment, roads, railways, power infrastructure and migration, while also creating significant environmental pressures."
);

knowledgeMap.put(
    "When did major industries begin developing in Sonbhadra?",
    "Large-scale industrial development accelerated mainly from the mid-20th century with the construction of dams, power plants, mines and manufacturing facilities."
);

knowledgeMap.put(
    "What is the history of power generation in Sonbhadra?",
    "Power generation expanded rapidly after major hydroelectric and thermal projects were developed, making Sonbhadra one of Uttar Pradesh's most important energy-producing regions."
);

knowledgeMap.put(
    "What is the history of Rihand Dam?",
    "Rihand Dam was constructed on the Rihand River in the 20th century and created the large Govind Ballabh Pant Sagar reservoir, supporting irrigation, water management and power generation."
);

knowledgeMap.put(
    "How did Rihand Dam affect Sonbhadra's development?",
    "The dam helped establish the foundation for large-scale industrial and power development and significantly changed settlement, employment and infrastructure in the region."
);

knowledgeMap.put(
    "How did industrialization change Renukoot?",
    "Industrialization transformed Renukoot from a relatively small settlement into a major industrial town centered on aluminium manufacturing and related industries."
);

knowledgeMap.put(
    "How did industrialization change Obra?",
    "The development of thermal power facilities transformed Obra into a major energy and industrial center."
);

knowledgeMap.put(
    "How did industrialization change Shaktinagar?",
    "Coal mining and large power projects turned Shaktinagar into an important energy-producing industrial township."
);

knowledgeMap.put(
    "How did coal mining influence Sonbhadra?",
    "Coal mining supplied fuel for regional power generation and stimulated transport, employment, industrial development and urbanization."
);

knowledgeMap.put(
    "What is the history of coal mining in Sonbhadra?",
    "Coal mining expanded significantly during the modern industrial period, particularly in the Singrauli coalfield area and surrounding parts of Sonbhadra."
);

knowledgeMap.put(
    "What is the history of thermal power plants in Sonbhadra?",
    "Thermal power plants expanded during the second half of the 20th century, especially around Obra, Anpara and Shaktinagar, using regional coal resources."
);

knowledgeMap.put(
    "What historical events shaped modern Sonbhadra?",
    "The creation of the district in 1989, construction of Rihand Dam, expansion of coal mining, development of thermal power and growth of manufacturing were major events shaping modern Sonbhadra."
);

knowledgeMap.put(
    "How did Sonbhadra become an important industrial district?",
    "Its coal, limestone, water resources, large land areas and strategic location encouraged the development of power plants, mining, aluminium and other industries."
);

knowledgeMap.put(
    "How did Sonbhadra develop as a tourism destination?",
    "Tourism developed around its waterfalls, forests, prehistoric rock paintings, fossil sites, forts, temples, reservoirs and scenic Vindhyan landscapes."
);

knowledgeMap.put(
    "What historical heritage should be preserved in Sonbhadra?",
    "Prehistoric rock art, fossil sites, forts, archaeological remains, ancient temples, tribal traditions and historic landscapes should be protected."
);

knowledgeMap.put(
    "Which historical sites need conservation in Sonbhadra?",
    "Important sites requiring conservation include prehistoric rock shelters, fossil-bearing formations, forts, sculptures, inscriptions and historic temples."
);

knowledgeMap.put(
    "What is the cultural history of Sonbhadra?",
    "Sonbhadra's culture reflects tribal traditions, Hindu religious practices, rural agricultural life, folk music and dance, crafts and the influence of modern industrial communities."
);

knowledgeMap.put(
    "What is the linguistic history of Sonbhadra?",
    "The district has long been a meeting area for languages and dialects of eastern Uttar Pradesh, central India and adjoining regions, with Hindi and local varieties widely spoken."
);

knowledgeMap.put(
    "What traditional festivals have historical importance in Sonbhadra?",
    "Major festivals include Navratri, Mahashivratri, Sawan-related celebrations, Holi, Diwali and various local and tribal fairs."
);

knowledgeMap.put(
    "How has Sonbhadra's history influenced its present identity?",
    "Its prehistoric heritage, tribal culture, religious traditions, natural landscapes and modern industrial economy together define Sonbhadra's present identity."
);

knowledgeMap.put(
    "Why is Sonbhadra historically important in Uttar Pradesh?",
    "Sonbhadra combines prehistoric archaeology, ancient cultural heritage, forts and temples with a modern industrial and energy history, making it distinctive within Uttar Pradesh."
);


        // Default fallback
        knowledgeMap.put("default", "I am Aura-2.0's Model Inalgo AI Agent, developed by Inalgo.");
    }

    /**
     * Gets an answer for a given question.
     * @param question The user's question
     * @return The answer if found, null otherwise
     */
    public String getAnswer(String question) {
        String normalized = normalizeQuestion(question);
        return knowledgeMap.getOrDefault(normalized, knowledgeMap.get("default"));
    }

    /**
     * Normalizes a question for better matching.
     * @param question The question to normalize
     * @return The normalized question
     */
    private String normalizeQuestion(String question) {
        if (question == null) {
            return "";
        }

        // Convert to lowercase
        String normalized = question.toLowerCase().trim();

        // Remove extra whitespace
        normalized = normalized.replaceAll("\\s+", " ");

        // Remove punctuation at the end
        normalized = normalized.replaceAll("[?!.]+$", "");

        return normalized;
    }

    /**
     * Gets all available questions in the knowledge base.
     * @return Map of questions to answers
     */
    public Map<String, String> getKnowledgeMap() {
        return new HashMap<>(knowledgeMap);
    }
}