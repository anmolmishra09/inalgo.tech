package com.aura.agent.service;

import com.aura.agent.model.AgentQuestion;
import com.aura.agent.model.AgentResponse;

/**
 * Service interface for handling agent questions and generating responses.
 */
public interface AgentService {
    /**
     * Processes a question and returns an appropriate response.
     * @param question The question to process
     * @return The agent's response
     */
    AgentResponse askQuestion(AgentQuestion question);
}