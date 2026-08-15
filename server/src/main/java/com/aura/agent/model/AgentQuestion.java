package com.aura.agent.model;

/**
 * Represents a question sent to the agent.
 */
public class AgentQuestion {
    private String question;

    // Default constructor
    public AgentQuestion() {}

    // Constructor with question
    public AgentQuestion(String question) {
        this.question = question;
    }

    // Getter and setter
    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }
}