# 📦 Software Developer Intern - DNDTS Pte Ltd

**Duration:** May 2025 - Aug 2025

---

### **Project 1: Multi-Barcode Recognition System**
Developed a mobile-web application to automate the inventory scanning process for high-volume phone shipments, replacing manual infrared scanning.

* **Problem:** Manual scanning of thousands of barcodes took **3.5 to 4 hours** per shipment.
* **Solution:** Built a **Next.js** mobile-web app integrated with a **Roboflow** computer vision model to detect multiple barcodes and decodes the barcodes using a barcode decoder from a single image.
* **Workflow:** Implemented a pipeline that identifies barcode coordinates, crops the regions, decodes the barcodefs and automatically updates the company's master spreadsheets.
* **Impact:** Reduced shipment processing time from 4 hours to **under 2 hours** (a **50% increase in efficiency**), even for staff unfamiliar with the process

#### **Reflections & Technical Growth**
* **Optimization:** Identified sequential decoding as a bottleneck; proposed **concurrency/parallelism** for faster execution.
* **Edge vs. Cloud:** Recognized browser processing limits (max 40 barcodes); proposed **offloading compute to a server** to handle higher density detections with a client-server architecture.

---

### **Project 2: Customer Support RAG Application**
Engineered a Retrieval-Augmented Generation (RAG) system to assist support staff in navigating a 300-page support handbook.


* **Problem:** High staff turnover led to a lack of expertise in a 300 page support handbook, causing slow response time and high training costs.
* **Solution:** Built a RAG pipeline using **LangChain**, **ChromaDB** (Vector Store), and **Streamlit**.
  * **Data Engineering:** Chunked and vectorized the handbook into a ChromaDB vector store
  * **Interface:** Built a streamlit chat interface for real-time similarity search and LLM responses with recommendations
  * **Deployment:** Containerized using **Docker** for local network deployment.
* **User Research:** Conducted staff interviews to identify pain points in handbook navigation and scenario matching; Ensure LLM could handle nuance as the handbook does not provide 1:1 match.
* **Impact:** * Reduced staff onboarding time from **1 week to 2 days**.
    * Generated **$150K annual savings** by reducing required support headcount by 3 staff.

---

### **Key Skills**
* **AI/CV:** Roboflow, LangChain, ChromaDB, LLM implementation.
* **Tools:** Next.js, Streamlit, Docker, Python.
* **Impact:** Workflow optimization, ROI calculation, Stakeholder interviews.
