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

  // ─────────────────────────────────────────────────────────────────────────
  // CS 739 — Distributed Systems  (Spring 2026)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "ds-p1-dsd-tutorial",
    course: "Distributed Systems",
    type: "paper",
    title: "Distributed System Design (Tutorial)",
    authors: "Google Code University",
    venue: "Course Background Reading",
    description:
      "Introductory tutorial covering the fundamental building blocks of distributed system design — communication, state, time, and failure — used as background framing before the primary research-paper readings for the course.",
    semester: "Spring 2026",
    tags: ["Background", "Tutorial", "Distributed Systems"],
  },
  {
    id: "ds-p2-rpc",
    course: "Distributed Systems",
    type: "paper",
    title: "Implementing Remote Procedure Calls",
    authors: "Andrew D. Birrell, Bruce Jay Nelson",
    year: 1984,
    venue: "ACM Trans. Comput. Syst. 2(1):39-59 — SIGOPS Hall of Fame",
    description:
      "Introduces RPC as a programming abstraction that lets a client invoke a procedure on a remote server as if it were a local call, hiding marshalling, transport, and binding behind generated stubs. Establishes the client-stub/server-stub architecture and partial-failure semantics that most RPC frameworks — including gRPC — still follow.",
    semester: "Spring 2026",
    tags: ["RPC", "Communication", "Stubs", "Classic"],
  },
  {
    id: "ds-p3-why-computers-stop",
    course: "Distributed Systems",
    type: "paper",
    title: "Why Do Computers Stop And What Can Be Done About It?",
    authors: "Jim Gray",
    year: 1985,
    venue: "HP Labs Technical Report TR-85.7 — SIGOPS Hall of Fame",
    description:
      "Analyzes real outage data from Tandem's fault-tolerant systems and finds software bugs and operator error — not hardware — dominate downtime causes. Argues for 'fail-fast' software modules and process-pair recovery as the practical path to high availability.",
    semester: "Spring 2026",
    tags: ["Fault Tolerance", "Availability", "Failures", "Classic"],
  },
  {
    id: "ds-p4-redundancy-not-fault-tolerance",
    course: "Distributed Systems",
    type: "paper",
    title:
      "Redundancy Does Not Imply Fault Tolerance: Analysis of Distributed Storage Reactions to Single Errors and Corruptions",
    authors:
      "Aishwarya Ganesan, Ramnatthan Alagappan, Andrea C. Arpaci-Dusseau, Remzi H. Arpaci-Dusseau",
    year: 2017,
    venue: "FAST '17",
    description:
      "Injects single disk errors and corruptions into eight widely-used distributed storage systems and finds redundancy alone doesn't guarantee fault tolerance — many systems propagate one local fault into cluster-wide failure or silent data loss through unsafe error handling in the replication layer.",
    semester: "Spring 2026",
    tags: ["Fault Injection", "Storage", "Redundancy", "Testing"],
  },
  {
    id: "ds-p5-role-of-distributed-state",
    course: "Distributed Systems",
    type: "paper",
    title: "The Role of Distributed State",
    authors: "John Ousterhout",
    year: 1991,
    description:
      "Surveys the tradeoffs of keeping state at clients versus servers in distributed file systems, arguing that client-side caching is essential for performance but introduces consistency and crash-recovery challenges that shaped NFS and its successors.",
    semester: "Spring 2026",
    tags: ["NFS", "Client State", "Caching", "File Systems"],
  },
  {
    id: "ds-p6-nfsv2",
    course: "Distributed Systems",
    type: "paper",
    title: "Design and Implementation of the Sun Network Filesystem",
    authors: "Russel Sandberg, David Goldberg, Steve Kleiman, Dan Walsh, Bob Lyon",
    year: 1985,
    venue: "USENIX Summer 1985",
    description:
      "Describes the original stateless NFS protocol built on Sun RPC and XDR, where the server holds no per-client session state and idempotent operations enable simple crash recovery — trading strict consistency for statelessness and cross-vendor interoperability.",
    semester: "Spring 2026",
    tags: ["NFS", "Stateless", "RPC", "File Systems"],
  },
  {
    id: "ds-p7-nfsv3",
    course: "Distributed Systems",
    type: "paper",
    title: "NFS Version 3: Design and Implementation",
    authors:
      "Brian Pawlowski, Chet Juszczak, Peter Staubach, Carl Smith, Diane Lebel, Dave Hitz",
    year: 1994,
    venue: "USENIX Summer 1994",
    description:
      "Extends NFSv2 with 64-bit file sizes, asynchronous writes with a commit protocol, and weak cache consistency (WCC) attributes, addressing the performance ceilings stateless NFSv2 hit as networks and files grew larger.",
    semester: "Spring 2026",
    tags: ["NFS", "Weak Cache Consistency", "File Systems"],
  },
  {
    id: "ds-p8-nfsv4",
    course: "Distributed Systems",
    type: "paper",
    title: "The NFS Version 4 Protocol",
    authors:
      "Brian Pawlowski, Spencer Shepler, Carl Beame, Brent Callaghan, Michael Eisler, David Noveck, David Robinson, Robert Thurlow",
    year: 2000,
    venue: "SANE 2000",
    description:
      "Reworks NFS as a stateful, compound-operation protocol with integrated locking, delegation (client-side caching leases), and strong security (RPCSEC_GSS) — moving away from earlier statelessness to support internet-scale, firewall-crossing deployments.",
    semester: "Spring 2026",
    tags: ["NFS", "Statefulness", "Delegation", "Security"],
  },
  {
    id: "ds-p9-afs",
    course: "Distributed Systems",
    type: "paper",
    title: "Scale and Performance in a Distributed File System",
    authors:
      "John H. Howard, Michael L. Kazar, Sherri G. Menees, David A. Nichols, M. Satyanarayanan, Robert N. Sidebotham, Michael J. West",
    year: 1988,
    venue: "ACM TOCS 6(1):51-81 — SIGOPS Hall of Fame",
    description:
      "Presents AFS's whole-file client caching with callbacks — servers notify clients when a cached file changes rather than clients polling — cutting server load and letting AFS scale to thousands of clients per server, a stark contrast to NFS's stateless design.",
    semester: "Spring 2026",
    tags: ["AFS", "Callbacks", "Caching", "Scalability"],
  },
  {
    id: "ds-p10-coda",
    course: "Distributed Systems",
    type: "paper",
    title: "Disconnected Operation in the Coda File System",
    authors: "James J. Kistler, M. Satyanarayanan",
    year: 1991,
    venue: "SOSP '91 — SIGOPS Hall of Fame",
    description:
      "Extends AFS with disconnected operation: clients hoard copies of important files before disconnecting, operate entirely from local cache while offline, and reintegrate changes with conflict detection on reconnection — pioneering the offline-first model later used by Git and Dropbox.",
    semester: "Spring 2026",
    tags: ["Coda", "Disconnected Operation", "Mobile", "Conflict Resolution"],
  },
  {
    id: "ds-p11-lbfs",
    course: "Distributed Systems",
    type: "paper",
    title: "A Low-Bandwidth Network File System",
    authors: "Athicha Muthitacharoen, Benjie Chen, David Mazieres",
    year: 2001,
    venue: "SOSP '01",
    description:
      "Exploits cross-file similarity by chunking files at content-defined boundaries and caching chunks client-side, so LBFS only ships bytes that actually changed — enabling file-system semantics over slow WAN links at close to LAN speed for typical workloads.",
    semester: "Spring 2026",
    tags: ["LBFS", "Bandwidth", "Chunking", "WAN"],
  },
  {
    id: "ds-p12-leases",
    course: "Distributed Systems",
    type: "paper",
    title:
      "Leases: An Efficient Fault-Tolerant Mechanism for Distributed File Cache Consistency",
    authors: "Cary G. Gray, David R. Cheriton",
    year: 1989,
    venue: "SOSP '89 — SIGOPS Hall of Fame",
    description:
      "Introduces leases — time-bounded promises of cache validity — as a middle ground between expensive synchronous invalidation and stale caching. A server can safely assume a crashed client's cache is invalid once its lease expires, decoupling correctness from clients staying alive.",
    semester: "Spring 2026",
    tags: ["Leases", "Cache Consistency", "Fault Tolerance"],
  },
  {
    id: "ds-p13-lamport-clocks",
    course: "Distributed Systems",
    type: "paper",
    title: "Time, Clocks, and the Ordering of Events in a Distributed System",
    authors: "Leslie Lamport",
    year: 1978,
    venue: "Communications of the ACM — SIGOPS Hall of Fame",
    description:
      "Defines the happens-before relation and logical (Lamport) clocks, showing a total ordering of events consistent with causality can be derived without synchronized physical clocks — the foundation under vector clocks, snapshots, and modern consistency protocols.",
    semester: "Spring 2026",
    tags: ["Logical Clocks", "Causality", "Ordering", "Classic"],
  },
  {
    id: "ds-p14-chandy-lamport-snapshots",
    course: "Distributed Systems",
    type: "paper",
    title: "Distributed Snapshots: Determining Global States of Distributed Systems",
    authors: "K. Mani Chandy, Leslie Lamport",
    year: 1985,
    venue: "ACM TOCS 3(1):63-75 — SIGOPS Hall of Fame",
    description:
      "Presents the Chandy-Lamport algorithm for capturing a consistent global snapshot of a distributed system's state using marker messages on FIFO channels, without stopping the system — a building block for checkpointing, deadlock detection, and protocol debugging.",
    semester: "Spring 2026",
    tags: ["Snapshots", "Global State", "Checkpointing"],
  },
  {
    id: "ds-p15-state-machine-replication",
    course: "Distributed Systems",
    type: "paper",
    title:
      "Implementing Fault-Tolerant Services Using the State Machine Approach: A Tutorial",
    authors: "Fred B. Schneider",
    year: 1990,
    venue: "ACM Comput. Surv. 22(4):299-319 — SIGOPS Hall of Fame",
    description:
      "Formalizes replicated state machines: if every replica starts in the same state and applies the same deterministic operations in the same order, all replicas stay consistent. Lays out the agreement/order properties underlying Paxos, Raft, and Chain Replication alike.",
    semester: "Spring 2026",
    tags: ["State Machine Replication", "Fault Tolerance", "Tutorial", "Classic"],
  },
  {
    id: "ds-p16-ha-nfs",
    course: "Distributed Systems",
    type: "paper",
    title: "A Highly Available Network File Server",
    authors: "Anupam K. Bhide, Elmootazbellah N. Elnozahy, Stephen P. Morgan",
    year: 1991,
    venue: "USENIX Winter 1991",
    description:
      "Describes a primary-backup NFS server design where a backup shadows the primary's disk writes over a dedicated link and takes over transparently on failure, restoring client sessions from replicated state — a concrete early instance of primary-backup replication in a production file server.",
    semester: "Spring 2026",
    tags: ["Primary-Backup", "High Availability", "NFS"],
  },
  {
    id: "ds-p17-remus",
    course: "Distributed Systems",
    type: "paper",
    title: "Remus: High Availability via Asynchronous Virtual Machine Replication",
    year: 2008,
    venue: "NSDI '08",
    description:
      "Provides transparent, whole-VM high availability by continuously checkpointing a running VM's memory and device state to a backup host dozens of times per second, buffering outbound network traffic until each checkpoint is safely replicated.",
    semester: "Spring 2026",
    tags: ["Virtualization", "Checkpointing", "High Availability"],
  },
  {
    id: "ds-p18-chain-replication",
    course: "Distributed Systems",
    type: "paper",
    title: "Chain Replication for Supporting High Throughput and Availability",
    authors: "Robbert van Renesse, Fred B. Schneider",
    year: 2004,
    venue: "OSDI '04",
    description:
      "Arranges replicas in a chain where writes flow head-to-tail and reads are served from the tail, guaranteeing strong consistency with lower coordination overhead than quorum-based protocols, at the cost of write latency proportional to chain length.",
    semester: "Spring 2026",
    tags: ["Chain Replication", "Strong Consistency", "Throughput"],
  },
  {
    id: "ds-p19-leopard-serverless",
    course: "Distributed Systems",
    type: "paper",
    title: "Making Serverless Pay-For-Use a Reality with Leopard",
    authors:
      "Tingjia Cao, Andrea C. Arpaci-Dusseau, Remzi H. Arpaci-Dusseau, Tyler Caraza-Harter",
    year: 2025,
    venue: "NSDI '25",
    description:
      "Identifies that serverless platforms often bill for idle/reserved capacity that doesn't reflect actual use, and proposes scheduling and resource-accounting changes so serverless billing tracks real consumption without sacrificing cold-start latency.",
    semester: "Spring 2026",
    tags: ["Serverless", "Scheduling", "Cloud", "Billing"],
  },
  {
    id: "ds-p20-paxos-made-simple",
    course: "Distributed Systems",
    type: "paper",
    title: "Paxos Made Simple",
    authors: "Leslie Lamport",
    year: 2001,
    venue: "ACM SIGACT News",
    description:
      "Lamport's own accessible rewrite of 'The Part-Time Parliament,' deriving the Paxos consensus protocol from first principles: a two-phase prepare/accept protocol letting a majority of replicas agree on a single value despite failures and asynchronous delays.",
    semester: "Spring 2026",
    tags: ["Paxos", "Consensus", "Classic"],
  },
  {
    id: "ds-p21-raft",
    course: "Distributed Systems",
    type: "paper",
    title: "In Search of an Understandable Consensus Algorithm (Extended Version)",
    authors: "Diego Ongaro, John Ousterhout",
    year: 2014,
    venue: "USENIX ATC '14",
    description:
      "Designs Raft explicitly for understandability, decomposing consensus into leader election, log replication, and safety, with the invariant that logs never contain conflicting entries at the same index. Became the de facto consensus protocol behind etcd, Consul, and CockroachDB.",
    semester: "Spring 2026",
    tags: ["Raft", "Consensus", "Leader Election", "Log Replication"],
  },
  {
    id: "ds-p22-chubby",
    course: "Distributed Systems",
    type: "paper",
    title: "The Chubby Lock Service for Loosely-Coupled Distributed Systems",
    authors: "Mike Burrows",
    year: 2006,
    venue: "OSDI '06 — SIGOPS Hall of Fame",
    description:
      "Describes Google's Chubby, a coarse-grained distributed lock service built on Paxos that applications use for leader election and small amounts of highly-available metadata — not for high-throughput coordination — establishing the pattern later followed by Zookeeper and etcd.",
    semester: "Spring 2026",
    tags: ["Chubby", "Locking", "Coordination", "Paxos"],
  },
  {
    id: "ds-p23-zookeeper",
    course: "Distributed Systems",
    type: "paper",
    title: "ZooKeeper: Wait-free Coordination for Internet-scale Systems",
    authors: "Patrick Hunt, Mahadev Konar, Flavio Paiva Junqueira, Benjamin Reed",
    year: 2010,
    venue: "USENIX ATC '10",
    description:
      "Presents ZooKeeper's wait-free coordination API — a hierarchical namespace of znodes with watches — built on the Zab atomic broadcast protocol, optimized for read-heavy coordination workloads like configuration, group membership, and leader election.",
    semester: "Spring 2026",
    tags: ["Zookeeper", "Coordination", "Zab", "Watches"],
  },
  {
    id: "ds-p24-epaxos",
    course: "Distributed Systems",
    type: "paper",
    title: "There Is More Consensus in Egalitarian Parliaments",
    authors: "Iulian Moraru, David G. Andersen, Michael Kaminsky",
    year: 2013,
    venue: "SOSP '13",
    description:
      "Removes the single-leader bottleneck from Paxos by letting any replica propose commands and using per-command dependency tracking to order only conflicting commands — achieving lower latency in wide-area, multi-datacenter deployments where a fixed leader is far from most clients.",
    semester: "Spring 2026",
    tags: ["EPaxos", "Leaderless Consensus", "Wide-Area"],
  },
  {
    id: "ds-p25-consistency-baseball",
    course: "Distributed Systems",
    type: "paper",
    title: "Replicated Data Consistency Explained Through Baseball",
    authors: "Douglas B. Terry",
    year: 2013,
    venue: "Communications of the ACM",
    description:
      "Uses baseball scoreboards and stat-tracking as an intuitive lens for the spectrum of consistency models — from strong to eventual to session guarantees like read-your-writes and monotonic reads — making an otherwise abstract taxonomy concrete.",
    semester: "Spring 2026",
    tags: ["Consistency Models", "Overview", "Eventual Consistency"],
  },
  {
    id: "ds-p26-bayou",
    course: "Distributed Systems",
    type: "paper",
    title:
      "Managing Update Conflicts in Bayou, a Weakly Connected Replicated Storage System",
    authors:
      "Douglas B. Terry, Marvin M. Theimer, Karin Petersen, Alan J. Demers, Mike J. Spreitzer, Carl H. Hauser",
    year: 1995,
    venue: "SOSP '95 — SIGOPS Hall of Fame",
    description:
      "Bayou lets replicas accept writes while disconnected and reconcile later using application-specific merge procedures and dependency checks, with a designated primary that later commits a stable, agreed-upon total order — an early, thoughtful take on optimistic, conflict-tolerant replication.",
    semester: "Spring 2026",
    tags: ["Bayou", "Conflict Resolution", "Weak Connectivity", "Optimistic Replication"],
  },
  {
    id: "ds-p27-existential-consistency",
    course: "Distributed Systems",
    type: "paper",
    title: "Existential Consistency: Measuring and Understanding Consistency at Facebook",
    authors:
      "Haonan Lu, Kaushik Veeraraghavan, Philippe Ajoux, Jim Hunt, Yee Jiun Song, Wendy Tobagus, Sanjeev Kumar, Wyatt Lloyd",
    year: 2015,
    venue: "SOSP '15",
    description:
      "Measures real production staleness and anomaly rates in Facebook's TAO storage stack at scale, finding violations of stronger consistency guarantees are rare in practice — motivating 'existential consistency,' a probabilistic framing of how consistent a system actually behaves.",
    semester: "Spring 2026",
    tags: ["Consistency Models", "Production Measurement", "Facebook", "TAO"],
  },
  {
    id: "ds-p28-linearizability-ramcloud",
    course: "Distributed Systems",
    type: "paper",
    title: "Implementing Linearizability at Large Scale and Low Latency",
    authors: "Collin Lee, Seo Jin Park, Ankita Kejriwal, Satoshi Matsushita, John Ousterhout",
    year: 2015,
    venue: "SOSP '15",
    description:
      "Shows linearizability — the strongest single-object consistency guarantee — doesn't have to be slow: RAMCloud implements it with client-assigned RPC identifiers and server-side dedup logs, adding microsecond-scale overhead instead of the round-trip cost typically assumed necessary for exactly-once semantics.",
    semester: "Spring 2026",
    tags: ["Linearizability", "RAMCloud", "Low Latency", "Exactly-Once"],
  },
  {
    id: "ds-p29-occult",
    course: "Distributed Systems",
    type: "paper",
    title: "I Can't Believe It's Not Causal! Scalable Causal Consistency with No Slowdown Cascades",
    authors:
      "Syed Akbar Mehdi, Cody Littley, Natacha Crooks, Lorenzo Alvisi, Nathan Bronson, Wyatt Lloyd",
    year: 2017,
    venue: "NSDI '17",
    description:
      "Identifies 'slowdown cascades' — where one slow replica forces every replica tracking its dependencies to also slow down — as a hidden cost of prior causally-consistent systems, and designs a version-vector compression scheme that guarantees causal consistency without inheriting a slow replica's latency.",
    semester: "Spring 2026",
    tags: ["Causal Consistency", "Occult", "Slowdown Cascades"],
  },
  {
    id: "ds-p30-nilext",
    course: "Distributed Systems",
    type: "paper",
    title: "Exploiting Nil-Externality for Fast Replicated Storage",
    authors:
      "Aishwarya Ganesan, Ramnatthan Alagappan, Andrea C. Arpaci-Dusseau, Remzi H. Arpaci-Dusseau",
    year: 2021,
    venue: "SOSP '21",
    description:
      "Observes that many operations issued to replicated storage are never externalized (the client crashes or never checks the result), and exploits this 'nil-externality' to safely skip synchronous replication for such operations — cutting write latency without weakening the guarantees clients actually observe.",
    semester: "Spring 2026",
    tags: ["Replication", "Latency", "Nil-Externality"],
  },
  {
    id: "ds-p31-gfs",
    course: "Distributed Systems",
    type: "paper",
    title: "The Google File System",
    authors: "Sanjay Ghemawat, Howard Gobioff, Shun-Tak Leung",
    year: 2003,
    venue: "SOSP '03 — SIGOPS Hall of Fame",
    description:
      "Describes GFS's design for storing massive files across thousands of commodity machines: a single master holding metadata, large 64MB chunks replicated three ways, and a relaxed consistency model trading strict correctness for the throughput Google's batch workloads like MapReduce needed.",
    semester: "Spring 2026",
    tags: ["GFS", "Distributed Storage", "Master-Chunk", "Classic"],
  },
  {
    id: "ds-p32-dynamo",
    course: "Distributed Systems",
    type: "paper",
    title: "Dynamo: Amazon's Highly Available Key-Value Store",
    authors:
      "Giuseppe DeCandia, Deniz Hastorun, Madan Jampani, Gunavardhan Kakulapati, Avinash Lakshman, Alex Pilchin, Swaminathan Sivasubramanian, Peter Vosshall, Werner Vogels",
    year: 2007,
    venue: "SOSP '07 — SIGOPS Hall of Fame",
    description:
      "Prioritizes availability over consistency for Amazon's shopping cart: consistent hashing distributes keys across nodes, sloppy quorums and hinted handoff tolerate node/network failures, and vector clocks let application logic resolve conflicting versions rather than the store rejecting writes.",
    semester: "Spring 2026",
    tags: ["Dynamo", "Eventual Consistency", "Consistent Hashing", "Vector Clocks"],
  },
  {
    id: "ds-p33-bigtable",
    course: "Distributed Systems",
    type: "paper",
    title: "Bigtable: A Distributed Storage System for Structured Data",
    authors:
      "Fay Chang, Jeffrey Dean, Sanjay Ghemawat, Wilson C. Hsieh, Deborah A. Wallach, Mike Burrows, Tushar Chandra, Andrew Fikes, Robert E. Gruber",
    year: 2006,
    venue: "OSDI '06 — SIGOPS Hall of Fame",
    description:
      "Presents Bigtable's sparse, sorted, multi-dimensional map abstraction (row key, column key, timestamp) built atop GFS and Chubby, with automatic sharding via tablets — the design that directly inspired HBase and the wide-column NoSQL model still used industry-wide.",
    semester: "Spring 2026",
    tags: ["Bigtable", "Wide-Column", "GFS", "Chubby"],
  },
  {
    id: "ds-p34-spanner",
    course: "Distributed Systems",
    type: "paper",
    title: "Spanner: Google's Globally Distributed Database",
    authors:
      "James C. Corbett, Jeffrey Dean, Michael Epstein, Andrew Fikes, Christopher Frost, J. J. Furman, Sanjay Ghemawat, Andrey Gubarev, Christopher Heiser, Peter Hochschild, Wilson Hsieh, Sebastian Kanthak, Eugene Kogan, Hongyi Li, Alexander Lloyd, Sergey Melnik, David Mwaura, David Nagle, Sean Quinlan, Rajesh Rao, Lindsay Rolig, Yasushi Saito, Michal Szymaniak, Christopher Taylor, Ruth Wang, Dale Woodford",
    year: 2013,
    venue: "ACM TOCS 31(3), Article 8",
    description:
      "Introduces TrueTime — an API exposing GPS/atomic-clock-bounded uncertainty intervals — letting Spanner assign globally-consistent timestamps to transactions and offer external consistency (linearizable, globally-ordered transactions) across datacenters, a guarantee previously thought impractical at this scale.",
    semester: "Spring 2026",
    tags: ["Spanner", "TrueTime", "External Consistency", "Global Database"],
  },
  {
    id: "ds-proj1-qdrant-fault-tolerance",
    course: "Distributed Systems",
    type: "project",
    title:
      "Qdrant Fault-Tolerance Analysis: Replication Factor vs. Recall, Tail Latency, and MTTR",
    description:
      "Ran live fault injection (node kills and network partitions via iptables) against a 3-node Qdrant cluster on CloudLab to measure how replication factor affects Recall@10, p95/p99 tail latency, and mean time to recovery on the ANN-Benchmarks SIFT-128 dataset (1M vectors). Found a sharp RF=1→RF=2 reliability cliff — RF=1 produced a 31x p99 spike and 149 query errors, while RF=2 produced zero errors and even lower latency than baseline — and an RF=2→RF=3 plateau where the extra replica bought no additional resilience against single-node failures.",
    links: {
      github: "https://github.com/maithil22/qdrant_analysis",
      paper: "https://drive.google.com/file/d/1UyIQl6APRZ4AMKVgnVSinDVmGhJlbQRQ/view?usp=sharing",
    },
    semester: "Spring 2026",
    tags: ["Qdrant", "Fault Injection", "Raft", "Vector Database", "CloudLab", "Distributed Systems"],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Foundational Models  (Spring 2026)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "fm-p1-talmas",
    course: "Foundational Models",
    type: "project",
    title: "TALMAS: Training-Free Attention Suppression for Diffusion LMs",
    description:
      "Invented a training-free inference intervention for Masked Diffusion Models that suppresses [MASK] token noise via dynamic, asymmetric logit biasing, improving generation coherence on GSM8K and HumanEval with negligible O(n) overhead and no loss in parallel decoding speed.",
    links: {
      paper: "https://drive.google.com/file/d/13rlTpQ0mxyIQPQU5XFYPqKwRkCbfKxFY/view?usp=sharing",
    },
    semester: "Spring 2026",
    tags: ["Diffusion Models", "LLM Inference", "Python", "GSM8K", "HumanEval"],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CS 839 — Next Generation Data Systems  (Fall 2026)
  // Instructor: Tianyu Li — reading list by lecture
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "ngds-l1-intelligence-free",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "Intelligence is Free, Now What? Data Systems for, of, and by Agents",
    venue: "BAIR Blog, 2026",
    description:
      "Opening framing piece on how cheap, abundant LLM intelligence reshapes the role of data systems — as infrastructure for agents, built by agents, and increasingly operated by agents.",
    links: { paper: "https://bair.berkeley.edu/blog/2026/07/07/intelligence-is-free-now-what/" },
    semester: "Fall 2026",
    tags: ["Agents", "Data Systems", "Overview"],
  },
  {
    id: "ngds-l1-disaggregation",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "Disaggregation: A New Architecture for Cloud Databases",
    venue: "VLDB '25",
    description:
      "Surveys the shift toward disaggregated compute/storage architectures in cloud database design and the tradeoffs this introduces for latency, elasticity, and cost.",
    links: { paper: "https://www.vldb.org/pvldb/vol18/p5527-xiangyao.pdf" },
    semester: "Fall 2026",
    tags: ["Cloud Databases", "Disaggregation", "Architecture"],
  },
  {
    id: "ngds-l2-aurora",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "Amazon Aurora: Design Considerations for High Throughput Cloud-Native Relational Databases",
    venue: "SIGMOD '17",
    description:
      "Introduces Aurora's log-as-the-database-is architecture, pushing redo processing into a distributed storage layer to decouple compute from storage for a cloud-native OLTP database.",
    links: { paper: "https://web.stanford.edu/class/cs245/readings/aurora.pdf" },
    semester: "Fall 2026",
    tags: ["Cloud-Native", "OLTP", "Databases"],
  },
  {
    id: "ngds-l2-socrates",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "Socrates: The New SQL Server in the Cloud",
    venue: "SIGMOD '19",
    description:
      "Describes Microsoft's redesign of SQL Server around a disaggregated log, page, and storage service split, enabling independent scaling of compute and durability.",
    links: { paper: "https://www.microsoft.com/en-us/research/wp-content/uploads/2019/05/socrates.pdf" },
    semester: "Fall 2026",
    tags: ["Cloud-Native", "OLTP", "Databases"],
  },
  {
    id: "ngds-l2-aurora-dsql",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "Aurora DSQL",
    venue: "arXiv '26",
    description:
      "Presents Amazon's newest distributed SQL database, extending Aurora's disaggregated storage ideas to multi-region strong consistency.",
    links: { paper: "https://arxiv.org/pdf/2607.13276" },
    semester: "Fall 2026",
    tags: ["Cloud-Native", "OLTP", "Distributed SQL"],
  },
  {
    id: "ngds-l3-snowflake",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "The Snowflake Elastic Data Warehouse",
    venue: "SIGMOD '16",
    description:
      "Describes Snowflake's multi-cluster shared-data architecture for cloud OLAP, separating storage, compute, and services layers for independent elasticity.",
    links: { paper: "https://info.snowflake.net/rs/252-RFO-227/images/Snowflake_SIGMOD.pdf" },
    semester: "Fall 2026",
    tags: ["Cloud-Native", "OLAP", "Data Warehouse"],
  },
  {
    id: "ngds-l3-lakehouse",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "Lakehouse: A New Generation of Open Platforms that Unify Data Warehousing and Advanced Analytics",
    venue: "CIDR '21",
    description:
      "Proposes the lakehouse architecture, layering warehouse-style management and performance directly on top of low-cost data lake storage.",
    links: { paper: "https://www.cidrdb.org/cidr2021/papers/cidr2021_paper17.pdf" },
    semester: "Fall 2026",
    tags: ["Lakehouse", "OLAP", "Cloud"],
  },
  {
    id: "ngds-l3-redshift-fleet",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "Why TPC Is Not Enough: Analysis of the Amazon Redshift Fleet",
    venue: "VLDB '24",
    description:
      "Analyzes real production query patterns across the Amazon Redshift fleet and finds standard TPC-style benchmarks miss workload characteristics that matter for cloud OLAP system design.",
    links: { paper: "https://www.vldb.org/pvldb/vol17/p3694-saxena.pdf" },
    semester: "Fall 2026",
    tags: ["OLAP", "Benchmarking", "Production Systems"],
  },
  {
    id: "ngds-l4-sentence-bert",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks",
    venue: "EMNLP '19",
    description:
      "Introduces a siamese/triplet BERT architecture for producing semantically meaningful sentence embeddings efficiently, foundational to modern dense retrieval and vector search pipelines.",
    links: { paper: "https://arxiv.org/pdf/1908.10084" },
    semester: "Fall 2026",
    tags: ["Embeddings", "ANN", "NLP"],
  },
  {
    id: "ngds-l4-ivfpq",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "Product Quantization for Nearest Neighbor Search",
    venue: "TPAMI '11",
    description:
      "Introduces product quantization (IVF-PQ), compressing high-dimensional vectors into compact codes to make large-scale approximate nearest-neighbor search memory- and compute-efficient.",
    links: { paper: "https://inria.hal.science/inria-00514462v2/document" },
    semester: "Fall 2026",
    tags: ["ANN", "Vector Index", "Quantization"],
  },
  {
    id: "ngds-l4-hnsw",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "Efficient and Robust Approximate Nearest Neighbor Search Using Hierarchical Navigable Small World Graphs",
    venue: "TPAMI '18",
    description:
      "Presents HNSW, a layered proximity-graph structure for approximate nearest-neighbor search that underlies most modern vector database indexes.",
    links: { paper: "https://arxiv.org/pdf/1603.09320" },
    semester: "Fall 2026",
    tags: ["ANN", "Vector Index", "Graph Search"],
  },
  {
    id: "ngds-l5-manu",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "Manu: A Cloud Native Vector Database Management System",
    venue: "VLDB '22",
    description:
      "Describes a cloud-native vector database built around Milvus, covering its disaggregated storage/compute design for serving large-scale ANN search workloads.",
    links: { paper: "https://arxiv.org/pdf/2206.13843" },
    semester: "Fall 2026",
    tags: ["Vector Database", "Cloud-Native", "ANN"],
  },
  {
    id: "ngds-l5-vbase",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "VBASE: Unifying Online Vector Similarity Search and Relational Queries via Relaxed Monotonicity",
    venue: "OSDI '23",
    description:
      "Proposes relaxed monotonicity as a unifying execution model that lets a single query engine handle both vector similarity search and traditional relational predicates efficiently.",
    links: { paper: "https://www.usenix.org/system/files/osdi23-zhang-qianxi_1.pdf" },
    semester: "Fall 2026",
    tags: ["Vector Database", "Query Processing", "Hybrid Search"],
  },
  {
    id: "ngds-l5-filtered-diskann",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "Filtered-DiskANN: Graph Algorithms for Approximate Nearest Neighbor Search with Filters",
    venue: "WWW '23",
    description:
      "Extends graph-based ANN search (DiskANN) to support attribute filtering alongside vector similarity, a core requirement for production vector-database query patterns.",
    links: { paper: "https://harsha-simhadri.org/pubs/Filtered-DiskANN23.pdf" },
    semester: "Fall 2026",
    tags: ["Vector Database", "ANN", "Filtered Search"],
  },
  {
    id: "ngds-l6-colbert",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "ColBERT: Efficient and Effective Passage Search via Contextualized Late Interaction over BERT",
    venue: "SIGIR '20",
    description:
      "Introduces late-interaction retrieval, computing token-level embeddings separately for queries and documents and combining them at search time for efficient, high-quality passage ranking.",
    links: { paper: "https://arxiv.org/pdf/2004.12832" },
    semester: "Fall 2026",
    tags: ["Information Retrieval", "Neural Search", "Late Interaction"],
  },
  {
    id: "ngds-l6-splade",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "SPLADE: Sparse Lexical and Expansion Model for First Stage Ranking",
    venue: "SIGIR '21",
    description:
      "Learns sparse, interpretable term-expansion representations that combine the efficiency of inverted indexes with the quality of learned neural ranking.",
    links: { paper: "https://arxiv.org/pdf/2107.05720" },
    semester: "Fall 2026",
    tags: ["Information Retrieval", "Sparse Retrieval", "Neural Search"],
  },
  {
    id: "ngds-l6-dsi",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "Transformer Memory as a Differentiable Search Index",
    venue: "NeurIPS '22",
    description:
      "Proposes encoding an entire document corpus's index directly into a Transformer's parameters, mapping queries to document identifiers end-to-end rather than via a separate retrieval index.",
    links: { paper: "https://arxiv.org/pdf/2202.06991" },
    semester: "Fall 2026",
    tags: ["Information Retrieval", "Differentiable Search", "Neural Search"],
  },
  {
    id: "ngds-l7-webgpt",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "WebGPT: Browser-assisted Question-answering with Human Feedback",
    venue: "arXiv '21",
    description:
      "Trains a language model to use a text-based web browser as a tool — searching, clicking, and quoting sources — to answer open-ended questions, an early template for agentic retrieval.",
    links: { paper: "https://arxiv.org/pdf/2112.09332" },
    semester: "Fall 2026",
    tags: ["Agents", "Retrieval", "LLM"],
  },
  {
    id: "ngds-l7-pageindex",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "PageIndex",
    venue: "Blog, 2025",
    description:
      "Describes a reasoning-based document indexing approach that builds a navigable tree structure for LLM agents to traverse instead of relying purely on vector similarity.",
    links: { paper: "https://pageindex.ai/blog/pageindex-intro" },
    semester: "Fall 2026",
    tags: ["Agents", "Retrieval", "Document Indexing"],
  },
  {
    id: "ngds-l7-chroma-context1",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "Chroma Context-1",
    venue: "Blog, 2026",
    description:
      "Discusses context engineering tradeoffs for agentic retrieval systems built on Chroma's vector database, including context assembly and retrieval relevance.",
    links: { paper: "https://trychroma.com/research/context-1" },
    semester: "Fall 2026",
    tags: ["Agents", "Retrieval", "Context Engineering"],
  },
  {
    id: "ngds-l8-memgpt",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "MemGPT: Towards LLMs as Operating Systems",
    venue: "arXiv '23",
    description:
      "Treats an LLM's limited context window like physical memory, with a virtual-memory-style paging system that moves information between an in-context 'working set' and an external store.",
    links: { paper: "https://arxiv.org/pdf/2310.08560" },
    semester: "Fall 2026",
    tags: ["Agents", "Memory", "LLM"],
  },
  {
    id: "ngds-l8-mem0",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory",
    venue: "arXiv '25",
    description:
      "Presents a production memory layer for AI agents that extracts, consolidates, and retrieves long-term memories across conversations at scale.",
    links: { paper: "https://arxiv.org/pdf/2504.19413" },
    semester: "Fall 2026",
    tags: ["Agents", "Memory", "LLM"],
  },
  {
    id: "ngds-l8-agent-workflow-memory",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "Agent Workflow Memory",
    venue: "arXiv '24",
    description:
      "Proposes inducing reusable workflows from an agent's past task trajectories and feeding them back as memory to improve performance on long-horizon tasks.",
    links: { paper: "https://arxiv.org/pdf/2409.07429" },
    semester: "Fall 2026",
    tags: ["Agents", "Memory", "LLM"],
  },
  {
    id: "ngds-l9-din-sql",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "DIN-SQL: Decomposed In-Context Learning of Text-to-SQL with Self-Correction",
    venue: "NeurIPS '23",
    description:
      "Decomposes text-to-SQL generation into schema-linking, classification, and SQL-generation subtasks with self-correction, improving in-context LLM performance without fine-tuning.",
    links: { paper: "https://arxiv.org/pdf/2304.11015" },
    semester: "Fall 2026",
    tags: ["Text-to-SQL", "Agents", "Analytics"],
  },
  {
    id: "ngds-l9-da-studio",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "DA-Studio",
    venue: "VLDB '26",
    description:
      "Covers an autonomous data-analytics agent system for exploring and analyzing datasets with minimal human specification.",
    links: { paper: "https://arxiv.org/pdf/2606.31423" },
    semester: "Fall 2026",
    tags: ["Text-to-SQL", "Agents", "Analytics"],
  },
  {
    id: "ngds-l9-beyond-text-to-sql",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "Beyond Text-to-SQL",
    venue: "arXiv '26",
    description:
      "Argues for moving past single-shot text-to-SQL translation toward richer autonomous data-agent workflows for analytics.",
    links: { paper: "https://arxiv.org/pdf/2605.21027" },
    semester: "Fall 2026",
    tags: ["Text-to-SQL", "Agents", "Analytics"],
  },
  {
    id: "ngds-l19-sirius",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "Sirius",
    venue: "CIDR '26",
    description:
      "Explores accelerating database query execution using emerging hardware, part of the course's module on databases for non-traditional compute substrates.",
    links: { paper: "https://vldb.org/cidrdb/papers/2026/p12-yogatama.pdf" },
    semester: "Fall 2026",
    tags: ["Hardware", "Databases", "Performance"],
  },
  {
    id: "ngds-l19-tigon",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "Tigon",
    venue: "OSDI '25",
    description:
      "Examines system design for databases running on emerging hardware substrates, trading off generality and performance.",
    links: { paper: "https://www.cs.utexas.edu/~witchel/pubs/huang25osdi-tigon.pdf" },
    semester: "Fall 2026",
    tags: ["Hardware", "Databases", "Performance"],
  },
  {
    id: "ngds-l19-smart-ssds",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "Query Processing on Smart SSDs: Opportunities and Challenges",
    venue: "SIGMOD '13",
    description:
      "Investigates pushing relational query operators down into SSD controllers to reduce data movement between storage and the host CPU.",
    links: { paper: "https://pages.cs.wisc.edu/~jignesh/publ/SmartSSD.pdf" },
    semester: "Fall 2026",
    tags: ["Hardware", "Databases", "Near-Data Processing"],
  },
  {
    id: "ngds-l20-megascale-data",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "MegaScale-Data",
    venue: "EuroSys '26",
    description:
      "Describes a data system built to serve large-scale LLM training pipelines, addressing throughput and reliability challenges unique to training-data workloads.",
    links: { paper: "https://arxiv.org/pdf/2504.09844" },
    semester: "Fall 2026",
    tags: ["ML Systems", "Data Pipelines", "Training"],
  },
  {
    id: "ngds-l20-mixtera",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "Mixtera",
    venue: "SIGMOD '26",
    description:
      "Presents a data-mixing system for controlling and serving heterogeneous training data distributions to large model training jobs.",
    links: { paper: "https://arxiv.org/pdf/2502.19790" },
    semester: "Fall 2026",
    tags: ["ML Systems", "Data Pipelines", "Training"],
  },
  {
    id: "ngds-l20-data-juicer",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "Data-Juicer: A One-Stop Data Processing System for Large Language Models",
    venue: "SIGMOD '24",
    description:
      "Provides a composable system of operators for cleaning, filtering, and processing massive text corpora used to pretrain large language models.",
    links: { paper: "https://arxiv.org/pdf/2309.02033" },
    semester: "Fall 2026",
    tags: ["ML Systems", "Data Pipelines", "Training"],
  },
  {
    id: "ngds-l21-multi-agent-research",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "How We Built Our Multi-Agent Research System",
    venue: "Anthropic Engineering Blog, 2025",
    description:
      "Engineering writeup on orchestrating multiple LLM agents for open-ended research tasks, covering task decomposition, parallelism, and context management.",
    links: { paper: "https://www.anthropic.com/engineering/multi-agent-research-system" },
    semester: "Fall 2026",
    tags: ["Agents", "Data Systems", "Multi-Agent"],
  },
  {
    id: "ngds-l21-experience-graphs",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "Experience Graphs: The Data Foundation for Self-Improving Agents",
    venue: "arXiv '26",
    description:
      "Proposes a graph-structured data representation of agent experience that lets agents retrieve and learn from past trajectories to self-improve over time.",
    links: { paper: "https://arxiv.org/pdf/2606.29823" },
    semester: "Fall 2026",
    tags: ["Agents", "Data Systems", "Multi-Agent"],
  },
  {
    id: "ngds-l21-batch-query-agentic",
    course: "Next Generation Data Systems",
    type: "paper",
    title: "Batch Query Processing & Optimization for Agentic Workflows",
    venue: "arXiv '25",
    description:
      "Studies how to batch and optimize the many small queries generated by agentic workflows to reduce latency and cost at the data-system layer.",
    links: { paper: "https://arxiv.org/pdf/2509.02121" },
    semester: "Fall 2026",
    tags: ["Agents", "Data Systems", "Query Optimization"],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BMI/CS 771 — Learning Based Methods for Computer Vision  (Fall 2026)
  // Instructor: Prof. Yin Li
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "cv771-course-project",
    course: "Learning Based Methods for Computer Vision",
    type: "project",
    title: "Course Project: Vision & Learning Model Design",
    description:
      "Semester-long project designing and implementing a vision/learning model, from proposal through a mid-term report, final presentation, and final report.",
    semester: "Fall 2026",
    tags: ["Computer Vision", "Research Project", "Deep Learning"],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CS 839 — AI Agents for Science  (Fall 2026)
  // Instructor: Prof. Fred Sala
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "aas-presentation",
    course: "AI Agents for Science",
    type: "assignment",
    title: "Student Presentation (Topic TBA)",
    description:
      "Capstone presentation drawing on the course's four modules — LLM agent foundations, scientific applications (literature synthesis, coding agents, hypothesis generation, autonomous laboratories), evaluation and training of agents, and multi-agent/safety topics — as part of the Oct 29–Dec 3 presentation series.",
    semester: "Fall 2026",
    tags: ["AI Agents", "Scientific Discovery", "LLM"],
  },
];
