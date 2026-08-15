package com.aura.agent.exception;

/**
 * Custom exception for agent-related errors.
 */
public class AgentException extends Exception {
    public AgentException(String message) {
        super(message);
    }

    public AgentException(String message, Throwable cause) {
        super(message, cause);
    }
}