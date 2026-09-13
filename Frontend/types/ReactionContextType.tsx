interface ReactionContextType {
    likes: number;
    dislikes: number;
    likeFn: () => Promise<void>;
    dislikeFn: () => Promise<void>;
}

export default ReactionContextType;