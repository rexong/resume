# 🤖 Generative AI Intern - NCS Pte Ltd

**Duration:** Jan 2025 - Jun 2025

---

### **Primary Project: LLM Evaluation and Feedback System (Proof-of-Concept)**

Developed a comprehensive Generative AI evaluation application from research to high-fidelity prototype, significantly improving the trustworthiness and effectiveness of LLM-powered chatbots.

* **Research & Design:** Established the theoretical foundation for the system based on state-of-the-art LLM critique methodologies, aiming for **90% accuracy within 5 evaluation iterations**.
* **System Development (POC):** Built a Proof-of-Concept using **Python, Haystack, and Streamlit** implementing a novel Generation and Evaluation pipeline.
    * **Generate:** Automated the creation of **synthetic chat conversations** by defining personas and objectives.
    * **Critique:** Designed an interface for **Subject Matter Experts (SMEs)** to provide human feedback.
    * **Evaluate:** Engineered a multi-step data processing and judging system utilizing **RNN Classification** and an **LLM-as-a-Judge Evaluator** for quantitative scoring.
* **Impact & Recognition:** Clinched **First Place** in the company-wide **"NEXT Ignite" Hackathon** and secured a promise of **resource allocation** for product transition.

#### **Key Lessons Learned (Evaluation System)**

* **Prompt Engineering & Model Robustness:** Addressed LLM role confusion by **bundling full conversation history into a single message** for generation tasks, ensuring the LLM maintained the correct persona.
* **LLM-as-a-Judge Validation:** Learned that achieving trust requires validating the **soundness of the LLM's rationale** rather than targeting $100\%$ correlation with human labels, which prevents model overfitting.
* **Process Shift:** Recognized that LLM projects require shifting from seeking $100\%$ accuracy (typical ML) to aiming for **"reasonable accuracy"** due to the inherent non-deterministic nature of generative AI.
* **Stakeholder Management:** Prioritized feedback from non-technical SMEs to validate pain points, confirming that **user-centric validation** drives useful product development over technical assumptions.
* **Architectural Trade-offs:** Gained insight into the trade-offs of using Streamlit, recognizing that its **rapid prototyping speed** comes at the cost of limited design customization and complex state management for scalable production systems.
* **Business Communication:** Recognized the challenge in pitching technical concepts and the necessity to **translate complex internal logic into tangible business value** and outcomes for non-technical stakeholders.

---

### **Supporting Projects & Contributions**

* **Data Collection Platform:** Developed a **full-stack web application** to gather high-quality human evaluation data, generating **200-300 pieces of training data** for the LLM-as-a-Judge POC.
* **Model Context Protocol (MCP) Exploration:** Investigated the potential of **MCP** by creating a **Command Line Interface (CLI) chatbot** using Python and Haystack.
    * **Application:** Utilized the CLI bot to **write documentation, generate simple test cases, and create web automation scripts**.
* **Documentation Automation:** Wrote scripts to **dynamically capture and update website screenshots** for documentation, ensuring visuals remained current despite rapid frontend changes.

#### **Key Lessons Learned (Supporting Projects)**

* **Tooling Precision:** Discovered that providing LLMs with **too many concurrent tools (MCP servers) degrades performance**. Effective tool use requires a focused, minimal set of available options.
* **Contextual Prompting:** Learned that for complex interactions (like web automation), prompts must provide **complete contextual awareness**, including instructions on how to handle unexpected elements (e.g., pop-ups), beyond just primary credentials.
