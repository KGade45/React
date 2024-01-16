import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class DatabaseService {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.projectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(conf.databaseId, conf.collectionId, slug, { title, content, featuredImage, status, userId })
        } catch (error) {
            throw error
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(conf.databaseId, conf.collectionId, slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                });
        } catch (error) {
            throw error
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(conf.databaseId, conf.collectionId, slug);
            //didn't return await because it will return document
            return true;
        } catch (error) {
            // throw error
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.databaseId, conf.collectionId, slug)
        } catch (error) {
            return false;
        }
    }

    async getAllPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(conf.databaseId, conf.collectionId, queries);
        } catch (error) {
            throw error
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(conf.bucketId, ID.unique(), file)
        } catch (error) {
            throw error;
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(conf.bucketId, fileId);
        } catch (error) {
            throw error;
        }
    }

    getFilePreview(fileId){
        try {
            return this.bucket.getFilePreview(conf.bucketId, fileId);
        } catch (error) {
            throw error;
        }
    }

}

const databaseService = new DatabaseService();

export default databaseService;