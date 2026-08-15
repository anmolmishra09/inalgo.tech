package com.aura.agent.service;

import org.springframework.stereotype.Service;

import com.aura.agent.knowledge.QuestionCategory;

/**
 * Service for classifying questions into categories.
 * Uses keyword matching to determine the appropriate category.
 */
@Service
public class QuestionClassifier {

    /**
     * Classifies a question into a category based on keywords.
     * @param question The question to classify
     * @return The category of the question
     */
    public QuestionCategory classifyQuestion(String question) {
        if (question == null || question.trim().isEmpty()) {
            return QuestionCategory.UNKNOWN;
        }

        String normalized = question.toLowerCase().trim();

        // Java Basics keywords
        if (matchesAny(normalized,
                "java", "jdk", "jre", "what is java", "java definition",
                "features of java", "java platform", "jvm", "bytecode")) {
            return QuestionCategory.JAVA_BASICS;
        }

        // OOP keywords
        if (matchesAny(normalized,
                "oop", "object oriented", "object-oriented", "encapsulation",
                "inheritance", "polymorphism", "abstraction", "class", "object",
                "interface", "abstract")) {
            return QuestionCategory.OOP;
        }

        // Collections keywords
        if (matchesAny(normalized,
                "collection", "arraylist", "linkedlist", "hashset", "treeset",
                "hashmap", "treemap", "queue", "stack", "list", "set", "map",
                "iterator", "iterable")) {
            return QuestionCategory.COLLECTIONS;
        }

        // Exceptions keywords
        if (matchesAny(normalized,
                "exception", "error", "try catch", "finally", "throw", "throws",
                "runtimeexception", "checked exception", "unchecked exception")) {
            return QuestionCategory.EXCEPTIONS;
        }

        // Multithreading keywords
        if (matchesAny(normalized,
                "thread", "multithreading", "concurrent", "synchronization",
                "runnable", "callable", "executorservice", "lock", "monitor")) {
            return QuestionCategory.MULTITHREADING;
        }

        // Java Streams keywords
        if (matchesAny(normalized,
                "stream", "lambda", "functional", "map", "filter", "reduce",
                "collect", "optional", "stream api")) {
            return QuestionCategory.JAVA_STREAMS;
        }

        // JVM keywords
        if (matchesAny(normalized,
                "jvm", "jdk", "jre", "garbage collection", "memory management",
                "stack vs heap", "compilation", "bytecode", "classloader")) {
            return QuestionCategory.JVM;
        }

        // Database keywords
        if (matchesAny(normalized,
                "jdbc", "sql", "database", "connection", "query", "resultset",
                "preparedstatement", "statement", "databasemetadata")) {
            return QuestionCategory.DATABASE;
        }

        // Spring keywords
        if (matchesAny(normalized,
                "spring", "spring mvc", "spring core", "dependency injection",
                "ioc", "inversion of control", "bean", "applicationcontext")) {
            return QuestionCategory.SPRING;
        }

        // Spring Boot keywords
        if (matchesAny(normalized,
                "spring boot", "springboot", "rest api", "restcontroller",
                "controller", "service", "repository", "@springbootapplication")) {
            return QuestionCategory.SPRING_BOOT;
        }

        // REST API keywords
        if (matchesAny(normalized,
                "rest", "api", "http", "get", "post", "put", "delete",
                "endpoint", "json", "xml", "restful")) {
            return QuestionCategory.REST_API;
        }

        // Testing keywords
        if (matchesAny(normalized,
                "junit", "test", "mockito", "assert", "unit test", "integration test",
                "@test", "@mock", "@injectmocks")) {
            return QuestionCategory.TESTING;
        }

        // Design Patterns keywords
        if (matchesAny(normalized,
                "design pattern", "singleton", "factory", "observer", "strategy",
                "decorator", "adapter", "proxy", "command", "template method")) {
            return QuestionCategory.DESIGN_PATTERNS;
        }

        // Algorithms keywords
        if (matchesAny(normalized,
                "algorithm", "sorting", "searching", "recursion", "dynamic programming",
                "greedy", "divide and conquer", "time complexity", "space complexity",
                "big o", "binary search", "bubble sort", "quick sort", "merge sort")) {
            return QuestionCategory.ALGORITHMS;
        }

        // Data Structures keywords
        if (matchesAny(normalized,
                "data structure", "array", "linked list", "stack", "queue", "tree",
                "graph", "hash table", "heap", "trie")) {
            return QuestionCategory.DATA_STRUCTURES;
        }

        // Debugging keywords
        if (matchesAny(normalized,
                "debug", "debugging", "breakpoint", "exception", "stack trace",
                "logging", "log", "trace", "profile")) {
            return QuestionCategory.DEBUGGING;
        }

        // Interview keywords
        if (matchesAny(normalized,
                "interview", "java interview", "programming interview",
                "coding problem", "whiteboard", "technical interview")) {
            return QuestionCategory.INTERVIEW;
        }

        // If none matched, return GENERAL_PROGRAMMING for programming-related questions
        if (isProgrammingRelated(normalized)) {
            return QuestionCategory.GENERAL_PROGRAMMING;
        }

        return QuestionCategory.UNKNOWN;
    }

    /**
     * Checks if the question contains any of the given keywords.
     * @param question The normalized question
     * @param keywords The keywords to check for
     * @return true if any keyword is found, false otherwise
     */
    private boolean matchesAny(String question, String... keywords) {
        for (String keyword : keywords) {
            if (question.contains(keyword)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Checks if a question is related to programming.
     * @param question The normalized question
     * @return true if programming-related, false otherwise
     */
    private boolean isProgrammingRelated(String question) {
        String[] programmingKeywords = {
                "program", "coding", "code", "software", "development",
                "variable", "function", "method", "loop", "condition",
                "array", "string", "integer", "boolean", "class", "object",
                "algorithm", "data", "structure", "syntax", "compile", "run"
        };

        return matchesAny(question, programmingKeywords);
    }
}