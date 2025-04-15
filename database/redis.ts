import { Redis } from "@upstash/redi";
import config from "@/lib/config";

const redis = new Redis({
  url: config.env.upstash.redisUrl,
  token: config.env.upstash.redisToken,
)};

export default redis;
