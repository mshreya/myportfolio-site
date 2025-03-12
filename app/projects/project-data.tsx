export interface Project {
  title: string;
  year: string;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Traffic Management Optimization",
    year: '09/2023 - 12/2023',
    description: "As part of coursework, designed a solution to optimize security camera deployment at traffic intersections by addressing the NP-complete Vertex Cover problem, reducing camera installations while ensuring full coverage.",
    url: "https://github.com/mshreya/ECE650---waterloo-traffic-management-system",
  },
  {
    title: "House prices prediction using ML",
    year: '05/2024 - 08/2024',
    description: "This project involves building a real estate price prediction site for Bangalore homes, covering data cleaning, model building, and deployment. It also demonstrates deploying the app on AWS EC2 with Nginx for server configuration.",
    url: "https://github.com/mshreya/BangaloreHomePrices",
  },
  {
    title: "Kafka Rider Updates",
    year: '09/2024 - 12/2024',
    description: "This project demonstrates how to use Apache Kafka for handling real-time food order updates from a restaurant (producer) to delivery partners (consumers). It includes a Docker-based Kafka setup, a producer to send order updates, and multiple consumers to receive updates.",
    url: "https://github.com/mshreya/kafka-rider-updates",
  },
];
