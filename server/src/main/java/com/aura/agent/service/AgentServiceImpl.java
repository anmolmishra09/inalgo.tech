package com.aura.agent.service;

import com.aura.agent.knowledge.JavaKnowledgeBase;
import com.aura.agent.knowledge.QuestionCategory;
import com.aura.agent.model.AgentQuestion;
import com.aura.agent.model.AgentResponse;
import org.springframework.stereotype.Service;

/**
 * Implementation of the AgentService that processes questions and generates responses.
 */
@Service
public class AgentServiceImpl implements AgentService {

    private final JavaKnowledgeBase knowledgeBase;
    private final QuestionClassifier questionClassifier;

    /**
     * Constructor-based dependency injection.
     * @param knowledgeBase The knowledge base containing Java information
     * @param questionClassifier The classifier for determining question categories
     */
    public AgentServiceImpl(JavaKnowledgeBase knowledgeBase, QuestionClassifier questionClassifier) {
        this.knowledgeBase = knowledgeBase;
        this.questionClassifier = questionClassifier;
    }

    /**
     * Processes a question and returns an appropriate response.
     * @param question The question to process
     * @return The agent's response
     */
    @Override
    public AgentResponse askQuestion(AgentQuestion question) {
        if (question == null || question.getQuestion() == null || question.getQuestion().trim().isEmpty()) {
            return new AgentResponse(
                    "Hello! I am Inalgo AI Agent, developed by Inalgo.",
                    false
            );
        }

        String userQuestion = question.getQuestion().trim();

        // Classify the question to determine if we should attempt to answer it
        QuestionCategory category = questionClassifier.classifyQuestion(userQuestion);

        // Get answer from knowledge base
        String answer = knowledgeBase.getAnswer(userQuestion);

        // Determine if we found a good match (not the default response)
        boolean matched = !answer.equals(knowledgeBase.getAnswer("default"));

        // If not matched and not a programming question, provide the fallback message
        if (!matched && category == QuestionCategory.UNKNOWN) {
            answer = "I am Aura-2.0's Java and Programming Agent. I specialize in Java, programming, software development, algorithms, data structures, and related technologies. Please ask me a Java or programming question.";
        }

        return new AgentResponse(answer, matched);
    }
}