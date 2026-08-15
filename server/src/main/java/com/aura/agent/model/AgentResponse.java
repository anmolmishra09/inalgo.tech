package com.aura.agent.model;

/**
 * Represents the response from the agent.
 */
public class AgentResponse {
    private String answer;
    private boolean matched;

    // Default constructor
    public AgentResponse() {}

    // Constructor with answer and matched status
    public AgentResponse(String answer, boolean matched) {
        this.answer = answer;
        this.matched = matched;
    }

    // Getters and setters
    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public boolean isMatched() {
        return matched;
    }

    public void setMatched(boolean matched) {
        this.matched = matched;
    }
}