export type Project = {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    live?: string;
    featured: boolean;
};

export const projects: Project[] = [
    {
        title: "Resume Website",
        description: "Self-hosted portfolio site built with Next.js, TypeScript, and Docker behind a reverse proxy.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Docker"],
        live: "https://professional.hmoobvaj.us",
        featured: true
    },
    {
        title: "IPEX-LLM",
        description: "Performance layer on top of PyTorch that utilizes Intel's optimized mathematical operations instead of native PyTorch operations to allow better performance on Intel Hardware.",
        tech: ["PyTorch", "Python"],
        github: "https://github.com/intel/ipex-llm",
        featured: true
    },    
    {
        title: "Proxmox VE",
        description: "An open-source server management platform with a web-based UI that integrates KVM hypervisor, Linux Containers (LXC), software-defined storage, and networking functionalities on a single platform.",
        tech: ["Rust", "C", "JavaScript", "Perl", "Makefile"],
        github: "https://github.com/proxmox",
        featured: true
    },
];