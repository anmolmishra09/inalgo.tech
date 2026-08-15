package com.aura.agent.controller;

import com.aura.agent.model.AgentQuestion;
import com.aura.agent.model.AgentResponse;
import com.aura.agent.service.AgentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * REST controller for handling agent questions.
 * Exposes the /api/agent/ask endpoint for the React frontend.
 */
@RestController
@RequestMapping("/agent")
@CrossOrigin(origins = "http://localhost:3000") // Allow requests from React frontend
public class AgentController {

    private final AgentService agentService;

    /**
     * Constructor-based dependency injection.
     * @param agentService The service for processing questions
     */
    @Autowired
    public AgentController(AgentService agentService) {
        this.agentService = agentService;
    }

    /**
     * Handles POST requests to /api/agent/ask.
     * Accepts a question and returns an answer with matched status.
     *
     * @param agentQuestion The question object containing the user's question
     * @return ResponseEntity containing the agent's response
     */
    @PostMapping("/ask")
    public ResponseEntity<AgentResponse> askQuestion(@RequestBody AgentQuestion agentQuestion) {
        AgentResponse response = agentService.askQuestion(agentQuestion);
        return ResponseEntity.ok(response);
    }

    /**
     * Handles GET requests to /api/agent/health for health checking.
     * @return Simple status message
     */
    @GetMapping("/health")
    public ResponseEntity<String> healthCheck() {
        return ResponseEntity.ok("Aura-2.0 Agent is running and ready to help!");
    }
}