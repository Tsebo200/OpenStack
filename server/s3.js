import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import {v4 as uuid} from 'uuid';

const s3 = new S3Client();
const BUCKET = process.env.BUCKET;

// const upload