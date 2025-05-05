import { comments } from "@/app/data/db";

export async function GET(){
    return Response.json(comments);
}
export async function POST(request){
    const newComment=await request.json();
    const checkDuplicate=comments.filter(comment=>comment.text===newComment.text)
    if(checkDuplicate.length===0){
        newComment.id=comments.length+1;
        comments.push(newComment)
    }
    
    return Response.json(comments);
}