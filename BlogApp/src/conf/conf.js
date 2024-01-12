const conf = {
    appwriteUrl: String(import.meta.env.VITE_ARRWRITE_URL),
    projectId: String(import.meta.env.VITE_ARRWRITE_PROJECT_ID),
    databaseId: String(import.meta.env.VITE_ARRWRITE_DATABASE_ID),
    collectionId: String(import.meta.env.VITE_ARRWRITE_COLLECTION_ID),
    bucketId: String(import.meta.env.VITE_ARRWRITE_BUCKET_ID),
}

export default conf