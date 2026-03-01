export type EntryType = "paper" | "project" | "assignment";

export interface CourseEntry {
  id: string;
  course: string;
  type: EntryType;
  title: string;
  authors?: string;
  year?: number;
  venue?: string;
  description: string;
  reflection?: string;
  links?: {
    paper?: string;
    github?: string;
    demo?: string;
  };
  semester: string;
  tags: string[];
}

export const coursework: CourseEntry[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // CS 736 — Advanced Operating Systems  (Fall 2025)
  // Papers #1–#23 from the course reading list
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "aos-p1-exterminate",
    course: "Advanced Operating Systems",
    type: "paper",
    title: "Exterminate All Operating System Abstractions",
    authors: "Dawson R. Engler, M. Frans Kaashoek",
    year: 1995,
    venue: "HotOS-V",
    description:
      "A position paper arguing that traditional OS abstractions (files, processes, sockets) harm performance, reliability, and adaptability by preventing applications from tailoring resource management. Advocates lowering the OS interface to bare hardware — the seed idea for the Exokernel architecture — where the kernel only securely multiplexes hardware while library OSes implement policy.",
    reflection:
      "Reading this alongside the Arrakis paper showed me how a 1995 provocation became a working system two decades later. Engler and Kaashoek's core bet — 'applications know best how to use resources' — feels more relevant now that cloud tenants run on shared hardware they can't control. The paper is intentionally aggressive, but that's the point: it forces you to justify every abstraction rather than accepting it as given.",
    semester: "Fall 2025",
    tags: ["OS Design", "Exokernel", "Abstractions", "Position Paper"],
  },
  {
    id: "aos-p2-the",
    course: "Advanced Operating Systems",
    type: "paper",
    title: 'The Structure of the "THE"-Multiprogramming System',
    authors: "Edsger W. Dijkstra",
    year: 1968,
    venue: "Communications of the ACM — SIGOPS Hall of Fame",
    description:
      "Introduces layered OS design using the THE system as a case study: hardware sits at layer 0, memory management at layer 1, process abstraction at layer 2, I/O device management at layer 3, and the user program at layer 4. Each layer is verified independently, and semaphores appear here as a formal synchronization primitive for the first time.",
    reflection:
      "The THE paper is remarkable for how much it anticipates. Dijkstra's insistence on proving each layer correct before building the next is essentially test-driven development for OS design. What struck me most is that he doesn't just describe a system — he describes a methodology for building systems you can reason about. That emphasis on verifiability feels directly relevant to Hyperkernel and CONVEROS, both of which we read later in the course.",
    semester: "Fall 2025",
    tags: ["OS Structure", "Layered Design", "Semaphores", "Classic"],
  },
  {
    id: "aos-p3-sasos",
    course: "Advanced Operating Systems",
    type: "paper",
    title: "Sharing and Protection in a Single-Address-Space Operating System",
    authors: "Jeffrey S. Chase, Henry M. Levy, Michael J. Feeley, Edward D. Lazowska",
    year: 1994,
    venue: "ACM Transactions on Computer Systems",
    description:
      "Presents Opal, a single-address-space OS for 64-bit architectures that decouples addressability from protection. Rather than isolating processes in separate address spaces, Opal uses segments and capabilities to grant fine-grained protection within one shared 64-bit address space, enabling efficient pointer-based sharing without expensive context switches.",
    semester: "Fall 2025",
    tags: ["Address Space", "Memory Protection", "Sharing", "64-bit"],
  },
  {
    id: "aos-p4-hydra",
    course: "Advanced Operating Systems",
    type: "paper",
    title: "Policy/Mechanism Separation in Hydra",
    authors: "R. Levin, E. Cohen, W. Corwin, F. Pollack, W. Wulf",
    year: 1975,
    venue: "SOSP '75",
    description:
      "Establishes policy/mechanism separation as a foundational OS design principle, demonstrated through the Hydra kernel at CMU. The kernel provides only mechanisms (scheduling, paging, protection); all policy is delegated to higher-level components. The paper shows this concretely for three subsystems: CPU scheduling, paging, and protection, proving that a minimal kernel can support diverse policies without modification.",
    reflection:
      "Hydra planted the idea that a kernel's job is to say 'how' not 'what.' Every time I reach for a hard-coded policy in a system I'm building, I now stop and ask whether it belongs in the mechanism layer. The paper aged surprisingly well — you can see its DNA in modern microkernels and in the Arrakis data plane/control plane split.",
    semester: "Fall 2025",
    tags: ["Policy/Mechanism", "OS Design", "Kernel", "Separation of Concerns"],
  },
  {
    id: "aos-p5-arrakis",
    course: "Advanced Operating Systems",
    type: "paper",
    title: "Arrakis: The Operating System is the Control Plane",
    authors: "Simon Peter, Jialin Li, Irene Zhang, Dan R. K. Ports, Doug Woos, Arvind Krishnamurthy, Thomas Anderson, Timothy Roscoe",
    year: 2014,
    venue: "OSDI '14",
    description:
      "Arrakis splits the OS into a control plane (the kernel, for configuration and resource allocation) and a data plane (user space, for all I/O). Applications use SR-IOV hardware virtualization to access network and storage devices directly without kernel involvement on the critical path. Redis achieves 2–5× throughput improvement and 9× latency reduction over Linux.",
    reflection:
      "Arrakis is what happens when you take the Exokernel paper seriously and wait for hardware to catch up. SR-IOV makes it practical: the kernel configures the device once and then steps aside. What I found most insightful is how it reframes the OS role — from traffic cop on every I/O to policy setter at initialization. The latency numbers for Redis are staggering and made me rethink how much overhead 'just a syscall' actually carries.",
    links: { paper: "https://www.usenix.org/conference/osdi14/technical-sessions/presentation/peter" },
    semester: "Fall 2025",
    tags: ["Kernel Bypass", "I/O", "SR-IOV", "Data Plane", "Performance"],
  },
  {
    id: "aos-p6-vm-primitives",
    course: "Advanced Operating Systems",
    type: "paper",
    title: "Virtual Memory Primitives for User Programs",
    authors: "Andrew W. Appel, Kai Li",
    year: 1991,
    venue: "ASPLOS '91",
    description:
      "Exposes five low-level virtual memory primitives (trap, prot1, protn, unprot, dirty) to user programs, enabling user-level implementations of garbage collection, persistent stores, shared virtual memory, and data-compression paging — without kernel modifications. The paper demonstrates that VM hardware, usually hidden behind the OS, is a rich substrate for user-level systems software.",
    semester: "Fall 2025",
    tags: ["Virtual Memory", "User-Level", "GC", "Memory Primitives"],
  },
  {
    id: "aos-p7-ingens",
    course: "Advanced Operating Systems",
    type: "paper",
    title: "Coordinated and Efficient Huge Page Management with Ingens",
    authors: "Youngjin Kwon, Hangchen Yu, Simon Peter, Christopher J. Rossbach, Emmett Witchel",
    year: 2016,
    venue: "OSDI '16",
    description:
      "Ingens treats memory contiguity as a first-class OS resource and tracks actual page utilization before promoting to huge pages. Linux's Transparent Huge Pages (THP) often promotes eagerly, causing bloat and stalls; Ingens coordinates promotion with access patterns to deliver up to 18% throughput improvement and 41% reduction in tail latency.",
    semester: "Fall 2025",
    tags: ["Huge Pages", "Memory Management", "THP", "Linux"],
  },
  {
    id: "aos-p8-bvt",
    course: "Advanced Operating Systems",
    type: "paper",
    title: "Borrowed-Virtual-Time (BVT) Scheduling: Supporting Latency-Sensitive Threads in a General-Purpose Scheduler",
    authors: "Kenneth J. Duda, David R. Cheriton",
    year: 1999,
    venue: "SOSP '99",
    description:
      "BVT lets latency-sensitive threads 'borrow' virtual time from the future by warping their effective virtual time backward, letting them preempt other threads immediately upon waking. The borrowed time is repaid later, so long-run fairness is maintained while interactive threads get sub-millisecond scheduling response.",
    semester: "Fall 2025",
    tags: ["Scheduling", "Latency", "Fair Share", "Real-Time"],
  },
  {
    id: "aos-p10-seda",
    course: "Advanced Operating Systems",
    type: "paper",
    title: "SEDA: An Architecture for Well-Conditioned, Scalable Internet Services",
    authors: "Matt Welsh, David Culler, Eric Brewer",
    year: 2001,
    venue: "SOSP '01",
    description:
      "SEDA (Staged Event-Driven Architecture) structures internet services as a pipeline of event-driven stages connected by queues. Each stage has a thread pool and a controller that dynamically adjusts concurrency based on queue depth, enabling graceful degradation under overload without thread-per-request overhead.",
    reflection:
      "SEDA's core insight — separate the I/O event loop from the processing logic and put explicit queues between them — showed up again when I first learned about modern async runtimes (Tokio, async Python). The paper predates them by two decades. The auto-tuning controller is the interesting part: it's essentially a feedback control loop for concurrency, which feels underused in today's systems.",
    semester: "Fall 2025",
    tags: ["Architecture", "Scalability", "Event-Driven", "Internet Services"],
  },
  {
    id: "aos-p11-commutativity",
    course: "Advanced Operating Systems",
    type: "paper",
    title: "The Scalable Commutativity Rule: Designing Scalable Software for Multicore Processors",
    authors: "Austin T. Clements, M. Frans Kaashoek, Nickolai Zeldovich, Robert T. Morris, Eddie Kohler",
    year: 2013,
    venue: "SOSP '13",
    description:
      "Establishes a theoretical principle: whenever interface operations commute (their results are order-independent for any interleaving), there exists an implementation with conflict-free memory accesses that scales to many cores. Introduces COMMUTER to generate commutativity conditions from specs and evaluates against POSIX and the sv6 kernel.",
    semester: "Fall 2025",
    tags: ["Scalability", "Multicore", "Concurrency", "Formal Methods", "POSIX"],
  },
  {
    id: "aos-p12-hyperkernel",
    course: "Advanced Operating Systems",
    type: "paper",
    title: "Hyperkernel: Push-Button Verification of an OS Kernel",
    authors: "Luke Nelson, Helgi Sigurbjarnarson, Kaiyuan Zhang, Dylan Johnson, James Bornholt, Emina Torlak, Xi Wang",
    year: 2017,
    venue: "SOSP '17",
    description:
      "Hyperkernel encodes OS kernel handlers as finite, loop-free SMT queries and uses Z3 to automatically verify isolation: a process can only access its own memory. The 'push-button' approach requires no manual proof annotations — if Z3 discharges the queries, the kernel is verified. Hyperkernel verifies a complete, bootable OS in under a minute.",
    reflection:
      "Hyperkernel made formal verification feel approachable rather than academic. The key design constraint — no unbounded loops in kernel handlers — is a real restriction, but it enables automated proof rather than manual Coq proofs. Reading it alongside CONVEROS made me see a progression: THE used layer-by-layer reasoning, Hyperkernel uses SMT, CONVEROS uses model checking. Each is trading proof expressiveness for automation.",
    links: { paper: "https://dl.acm.org/doi/10.1145/3132747.3132748" },
    semester: "Fall 2025",
    tags: ["Verification", "SMT", "Formal Methods", "OS Safety"],
  },
  {
    id: "aos-p13-f2fs",
    course: "Advanced Operating Systems",
    type: "paper",
    title: "F2FS: A New File System for Flash Storage",
    authors: "Changman Lee, Dongho Sim, Joo-Young Hwang, Sangyeun Cho",
    year: 2015,
    venue: "FAST '15",
    description:
      "F2FS is a log-structured file system designed around NAND flash characteristics: sequential writes for performance, multi-head logging to avoid GC pressure, and a node address table (NAT) that eliminates LFS's wandering-tree update problem. Now the default filesystem for Android devices.",
    links: { paper: "https://www.usenix.org/conference/fast15/technical-sessions/presentation/lee" },
    semester: "Fall 2025",
    tags: ["File Systems", "Flash", "NAND", "Log-Structured", "Android"],
  },
  {
    id: "aos-p14-racerx",
    course: "Advanced Operating Systems",
    type: "paper",
    title: "RacerX: Effective, Static Detection of Race Conditions and Deadlocks",
    authors: "Dawson Engler, Ken Ashcraft",
    year: 2003,
    venue: "SOSP '03",
    description:
      "RacerX uses flow-sensitive interprocedural static analysis to infer locking disciplines and flag violations as potential race conditions or deadlocks. It found hundreds of bugs in Linux, FreeBSD, and commercial OS kernels, including 12 serious previously-unknown races, demonstrating that static analysis can surface concurrency bugs at scale without running the code.",
    links: { paper: "https://dl.acm.org/doi/10.1145/945445.945468" },
    semester: "Fall 2025",
    tags: ["Race Detection", "Static Analysis", "Concurrency", "Bug Finding"],
  },
  {
    id: "aos-p15-futex",
    course: "Advanced Operating Systems",
    type: "paper",
    title: "Fuss, Futexes and Furwocks: Fast Userlevel Locking in Linux",
    authors: "Hubertus Franke, Rusty Russell, Matthew Kirkwood",
    year: 2002,
    venue: "Ottawa Linux Symposium '02",
    description:
      "Introduces futexes (fast userspace mutexes), the synchronization primitive underlying pthreads on Linux today. In the uncontended case, locking and unlocking are pure userspace atomic operations with no kernel involvement. Only when a thread must actually wait does it make a syscall, minimizing kernel overhead for the common case.",
    reflection:
      "Futexes are one of those primitives that are everywhere once you know to look: pthreads mutexes, Java monitors, Go's sync.Mutex all sit on futexes at the bottom. The paper's core trick — use a shared memory word for state and only enter the kernel on contention — is a perfect example of the 'fast path / slow path' design principle. After reading this I started looking for the same pattern everywhere.",
    links: { paper: "https://www.kernel.org/doc/ols/2002/ols2002-pages-479-495.pdf" },
    semester: "Fall 2025",
    tags: ["Synchronization", "Locking", "Linux", "User-Level", "pthreads"],
  },
  {
    id: "aos-p16-converos",
    course: "Advanced Operating Systems",
    type: "paper",
    title: "CONVEROS: Practical Model Checking for Verifying Rust OS Kernel Concurrency",
    authors: "Ruize Tang et al.",
    year: 2025,
    venue: "USENIX ATC '25",
    description:
      "Applies model checking to verify concurrency correctness in the Asterinas Rust OS kernel using PlusCal specifications. CONVEROS uncovered 20 bugs across 12 critical concurrency modules — including deadlocks and atomicity violations — with a specification-to-code ratio of 0.3–2.3, demonstrating that model checking is practical for production-scale Rust kernels.",
    semester: "Fall 2025",
    tags: ["Model Checking", "Rust", "OS Verification", "Concurrency", "Safety"],
  },
  {
    id: "aos-p17-btrfs",
    course: "Advanced Operating Systems",
    type: "paper",
    title: "BTRFS: The Linux B-Tree Filesystem",
    authors: "Ohad Rodeh, Josef Bacik, Chris Mason",
    year: 2013,
    venue: "ACM Transactions on Storage",
    description:
      "Describes BTRFS's copy-on-write B-tree structure that supports snapshots, checksums, transparent compression, and built-in RAID — all in a single filesystem. COW guarantees that an in-progress write never overwrites live data, enabling crash-consistent snapshots at near-zero cost and self-healing through per-block checksums.",
    links: { paper: "https://dl.acm.org/doi/10.1145/2501620.2501623" },
    semester: "Fall 2025",
    tags: ["File Systems", "B-Tree", "Copy-on-Write", "Snapshots", "Linux"],
  },
  {
    id: "aos-p18-wisckey",
    course: "Advanced Operating Systems",
    type: "paper",
    title: "WiscKey: Separating Keys from Values in SSD-Conscious Storage",
    authors: "Lanyue Lu, Thanumalayan Sankaranarayana Pillai, Andrea C. Arpaci-Dusseau, Remzi H. Arpaci-Dusseau",
    year: 2016,
    venue: "FAST '16",
    description:
      "WiscKey redesigns LSM-tree key-value stores for SSDs by keeping only keys in the tree and storing values in a separate append-only log. This eliminates value write amplification during compaction while exploiting SSD's cheap random reads. Achieves up to 8× faster sequential loads and 3.6× faster random lookups than LevelDB.",
    reflection:
      "WiscKey is a perfect example of 'know when the old abstractions no longer fit.' LSM trees were designed around spinning disk economics; WiscKey asks what changes when random reads become cheap on SSD. The key-value separation idea is simple in hindsight, but the GC correctness argument is tricky — you need to verify a value is still referenced before reclaiming it. I applied LoRA-style thinking here: small targeted change, large performance gain.",
    links: { paper: "https://www.usenix.org/conference/fast16/technical-sessions/presentation/lu" },
    semester: "Fall 2025",
    tags: ["Key-Value Store", "SSD", "LSM Tree", "Write Amplification"],
  },
  {
    id: "aos-p19-hugepage-subrelease",
    course: "Advanced Operating Systems",
    type: "paper",
    title: "Adaptive Huge-Page Subrelease for Non-moving Memory Allocators in Warehouse-Scale Computers",
    authors: "Martin Maas, Chris Kennelly, Khanh Nguyen, Darryl Gove, Kathryn S. McKinley, Paul Turner",
    year: 2021,
    venue: "ISMM '21",
    description:
      "Addresses the tension between keeping memory as huge pages (for TLB performance) and releasing memory back to the OS (for efficiency at warehouse scale). Introduces adaptive subrelease — breaking up huge pages only when demand warrants — that maintains 98% huge-page coverage vs. 87% without it, while still returning memory promptly. Deployed in Google's TCMalloc.",
    semester: "Fall 2025",
    tags: ["Memory Management", "Huge Pages", "Allocator", "Warehouse-Scale", "TCMalloc"],
  },
  {
    id: "aos-p20-scone",
    course: "Advanced Operating Systems",
    type: "paper",
    title: "SCONE: Secure Linux Containers with Intel SGX",
    authors: "Sergei Arnautov, Bohdan Trach, Franz Gregor, Thomas Knauth, André Martin, Christian Priebe, Joshua Lind, Divya Muthukumaran, Dan O'Keeffe, Mark L. Stillwell, David Goltzsche, Dave Eyers, Rüdiger Kapitza, Peter Pietzuch, Christof Fetzer",
    year: 2016,
    venue: "OSDI '16",
    description:
      "SCONE runs Linux containers inside Intel SGX enclaves, protecting application memory and secrets from a compromised host OS or hypervisor. To avoid expensive enclave transitions on every syscall, it uses shielded execution with asynchronous system call forwarding and transparent I/O encryption, achieving 0.6×–1.2× native throughput.",
    links: { paper: "https://www.usenix.org/conference/osdi16/technical-sessions/presentation/arnautov" },
    semester: "Fall 2025",
    tags: ["SGX", "Containers", "Security", "Confidential Computing", "Trusted Execution"],
  },
  {
    id: "aos-p21-erebor",
    course: "Advanced Operating Systems",
    type: "paper",
    title: "Erebor: A Drop-In Sandbox Solution for Private Data Processing in Untrusted Confidential Virtual Machines",
    authors: "Xiao Zhang et al.",
    year: 2025,
    venue: "EuroSys '25",
    description:
      "Erebor provides intra-kernel privilege isolation inside confidential VMs, preventing an untrusted guest OS kernel from accessing sensitive application data. The sandbox is drop-in compatible with existing cloud deployments and imposes only 4.5%–13.2% performance overhead, extending confidential computing guarantees to the guest OS threat model.",
    links: { paper: "https://dl.acm.org/doi/10.1145/3689031.3717464" },
    semester: "Fall 2025",
    tags: ["Confidential Computing", "Sandbox", "CVM", "Security", "Isolation"],
  },
  {
    id: "aos-p22-lake",
    course: "Advanced Operating Systems",
    type: "paper",
    title: "Towards a Machine Learning-Assisted Kernel with LAKE",
    authors: "Henrique Fingler, Isha Tarte, Hungchen Yu, Ariel Szekeres, Sanketh Vedula, Avishay Traeger, Ronen Kat, Emmett Witchel",
    year: 2023,
    venue: "ASPLOS '23",
    description:
      "LAKE enables ML inference inside the OS kernel, allowing subsystems like I/O scheduling and memory management to make data-driven decisions. It introduces a kernel-space ML runtime with support for hardware accelerators and achieves 95% inference speedup for I/O latency prediction while avoiding the cost of user-kernel context switches for inference.",
    links: { paper: "https://dl.acm.org/doi/10.1145/3575693.3575697" },
    semester: "Fall 2025",
    tags: ["Machine Learning", "Kernel", "Systems ML", "I/O", "Scheduling"],
  },
  {
    id: "aos-p23-kleio",
    course: "Advanced Operating Systems",
    type: "paper",
    title: "Kleio: A Hybrid Memory Page Scheduler with Machine Intelligence",
    authors: "Georgios Doudali, Sergey Blagodurov, Abhinav Vishnu, Dimitrios Nikolopoulos, Christos Antonopoulos",
    year: 2019,
    venue: "HPDC '19",
    description:
      "Kleio manages page placement in tiered memory systems (DRAM + NVM or HBM + DDR) by combining history-based heuristics with a recurrent neural network for access-pattern prediction. It reduces the performance gap with an oracle page scheduler by 80%, deploying the RNN selectively to amortize inference cost.",
    links: { paper: "https://dl.acm.org/doi/10.1145/3307681.3325398" },
    semester: "Fall 2025",
    tags: ["Machine Learning", "Memory Tiering", "Page Scheduling", "NVM", "HBM"],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CS 544 — Introduction to Big Data Systems  (Fall 2025)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "cs544-p1",
    course: "Introduction to Big Data Systems",
    type: "project",
    title: "P1: Containerized Deployment with Docker",
    description:
      "Built and deployed a multi-service application using Docker. Wrote Dockerfiles, managed image layers, configured container networking, and used Docker Compose to orchestrate services. Explored how containerization enables reproducible, isolated environments for big data workloads.",
    semester: "Fall 2025",
    tags: ["Docker", "Containers", "DevOps", "Linux"],
  },
  {
    id: "cs544-p2",
    course: "Introduction to Big Data Systems",
    type: "project",
    title: "P2: Network & Memory Resources — gRPC and Caching",
    description:
      "Implemented a gRPC-based microservice with Docker Compose networking. Built a memory caching layer to reduce redundant computation, profiled cache hit rates with PyArrow, and analyzed the performance impact of caching strategies on data-intensive pipelines.",
    semester: "Fall 2025",
    tags: ["gRPC", "Docker Compose", "Caching", "PyArrow", "Networking"],
  },
  {
    id: "cs544-p3",
    course: "Introduction to Big Data Systems",
    type: "project",
    title: "P3: Compute & Storage — Threads, Locks, and File Formats",
    description:
      "Explored concurrent compute using Python threads and locks, analyzing race conditions and synchronization overhead. Compared storage formats (CSV, Parquet, columnar) for read/write performance, and integrated with a SQL database (MySQL) as a structured storage backend.",
    semester: "Fall 2025",
    tags: ["Multithreading", "Locks", "Parquet", "MySQL", "Storage"],
  },
  {
    id: "cs544-p4",
    course: "Introduction to Big Data Systems",
    type: "project",
    title: "P4: HDFS and Distributed Loan Data Analysis",
    description:
      "Set up a Hadoop HDFS cluster and loaded a large loan dataset. Performed distributed file operations, analyzed data distribution across nodes, and benchmarked HDFS read/write throughput. Implemented a MapReduce job to compute loan statistics across partitioned data.",
    semester: "Fall 2025",
    tags: ["HDFS", "Hadoop", "MapReduce", "Distributed Storage"],
  },
  {
    id: "cs544-p5",
    course: "Introduction to Big Data Systems",
    type: "project",
    title: "P5: Apache Spark — RDDs, DataFrames, and Loan Analytics",
    description:
      "Built data pipelines on the loan dataset using Apache Spark. Compared RDD-level transformations with the DataFrame/SQL API, performed aggregations and joins at scale, and applied Spark MLlib for a regression task. Analyzed query execution plans to optimize shuffle and partition strategies.",
    semester: "Fall 2025",
    tags: ["Spark", "RDD", "DataFrames", "Spark SQL", "MLlib"],
  },
  {
    id: "cs544-p6",
    course: "Introduction to Big Data Systems",
    type: "project",
    title: "P6: Cassandra — Wide-Column Storage and Weather Data",
    description:
      "Modeled and stored weather station time-series data in Apache Cassandra. Designed partition keys and clustering columns for query-driven schema design, wrote CQL queries for time-range reads, and benchmarked read/write throughput under varying replication factors and consistency levels.",
    semester: "Fall 2025",
    tags: ["Cassandra", "CQL", "Wide-Column", "Time Series", "NoSQL"],
  },
  {
    id: "cs544-p7",
    course: "Introduction to Big Data Systems",
    type: "project",
    title: "P7: Kafka — Real-Time Weather Station Streaming",
    description:
      "Designed a streaming pipeline where simulated weather stations publish sensor readings to Kafka topics. Implemented producers and consumers in Python, handled consumer group rebalancing, and built a stream processing layer to compute rolling averages and detect anomalies in real time.",
    semester: "Fall 2025",
    tags: ["Kafka", "Streaming", "Event-Driven", "Python", "Real-Time"],
  },
  {
    id: "cs544-p8",
    course: "Introduction to Big Data Systems",
    type: "project",
    title: "P8: Cloud — Google BigQuery and Geospatial Analytics",
    description:
      "Migrated a dataset to Google BigQuery and ran large-scale analytical queries using standard SQL. Explored partitioned and clustered tables for query cost optimization. Performed geospatial analysis using BigQuery GIS functions to analyze geographic distribution patterns in the dataset.",
    semester: "Fall 2025",
    tags: ["BigQuery", "Cloud", "SQL", "GIS", "Google Cloud"],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CS 760 — Machine Learning  (Fall 2025)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "cs760-hw1",
    course: "Machine Learning",
    type: "assignment",
    title: "HW1: Supervised Learning — Decision Trees and kNN",
    description:
      "Implemented decision tree learning from scratch with information-gain splitting, tree pruning, and depth control. Built a k-nearest-neighbor classifier with multiple distance metrics. Analyzed bias-variance tradeoff empirically by varying model complexity across multiple datasets and evaluation folds.",
    semester: "Fall 2025",
    tags: ["Decision Trees", "kNN", "Supervised Learning", "Bias-Variance"],
  },
  {
    id: "cs760-hw2",
    course: "Machine Learning",
    type: "assignment",
    title: "HW2: Linear Models and Optimization",
    description:
      "Derived and implemented linear regression with closed-form and gradient-descent solutions. Implemented logistic regression with L1/L2 regularization. Compared SGD, mini-batch GD, and Adam optimizers on a classification task, analyzing convergence rate and generalization behavior.",
    semester: "Fall 2025",
    tags: ["Linear Regression", "Logistic Regression", "SGD", "Regularization", "Optimization"],
  },
  {
    id: "cs760-hw3",
    course: "Machine Learning",
    type: "assignment",
    title: "HW3: Unsupervised Learning — Clustering and Dimensionality Reduction",
    description:
      "Implemented k-means and Gaussian Mixture Models (EM algorithm) from scratch. Applied PCA for dimensionality reduction and visualized high-dimensional embeddings. Evaluated clustering quality using silhouette scores and analyzed the effect of initialization strategies on convergence.",
    semester: "Fall 2025",
    tags: ["K-Means", "GMM", "EM Algorithm", "PCA", "Clustering"],
  },
  {
    id: "cs760-hw4",
    course: "Machine Learning",
    type: "assignment",
    title: "HW4: Neural Networks — Training and Architectures",
    description:
      "Built a multi-layer perceptron from scratch with backpropagation. Implemented CNNs using PyTorch for image classification on CIFAR-10 and RNNs for sequence modeling. Explored activation functions, batch normalization, dropout, and learning rate schedules through systematic ablations.",
    semester: "Fall 2025",
    tags: ["Neural Networks", "CNN", "RNN", "PyTorch", "Backpropagation"],
  },
  {
    id: "cs760-hw5",
    course: "Machine Learning",
    type: "assignment",
    title: "HW5: Advanced Topics — SVMs, Language Models, and Learning Theory",
    description:
      "Implemented a soft-margin SVM with kernel functions (RBF, polynomial) using quadratic programming. Analyzed PAC-learning bounds and VC dimension for hypothesis classes. Explored fine-tuning a pre-trained language model on a downstream classification task and analyzed transfer learning efficiency.",
    semester: "Fall 2025",
    tags: ["SVM", "Kernels", "PAC Learning", "Language Models", "Transfer Learning"],
  },
];
