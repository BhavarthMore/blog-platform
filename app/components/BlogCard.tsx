import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type BlogCardProps = {
    title: string;
    excerpt: string;
    onView: () => void;
    onDelete: () => void;
};

const BlogCard = ({ title, excerpt, onView, onDelete }: BlogCardProps) => {
    const truncatedExcerpt = excerpt.length > 100 ? `${excerpt.substring(0, 100)}...` : excerpt;

    return (
        <Card className="p-4 border border-gray-200 rounded-lg shadow-sm">
            <CardHeader className="flex justify-between">
                <CardTitle>{title}</CardTitle>
                {/* Add a button for sharing if needed */}
                {/* <Button variant="secondary" onClick={onShare}>Share</Button> */}
            </CardHeader>
            <CardContent>
                <CardDescription className="truncate">{truncatedExcerpt}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button onClick={onView}>View</Button>
                <Button variant="destructive" onClick={onDelete}>Delete</Button>
            </CardFooter>
        </Card>
    );
};

export default BlogCard;