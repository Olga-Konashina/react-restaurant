import { use, useState } from "react";
import { Button } from "../button/button";
import { UserContainer } from "../user/user-container";
import { useUpdateReviewMutation } from "../../redux/services/api";
import { ReviewForm } from "../review-form/review-form";
import { AuthContext } from "../auth-provider";

export const Review = ({ text, userId, id, rating }) => {
  const { auth } = use(AuthContext);
  const { isAuthorized } = auth;

  const [isEditing, setIsEditing] = useState(false);
  const [currentText, setCurrentText] = useState(text);
  const [currentRating, setCurrentRating] = useState(rating);

  if (!currentText) {
    return null;
  }

  const [updateReview] = useUpdateReviewMutation();

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => setIsEditing(false);

  const handleSubmit = (newText, newRating) => {
    setCurrentText(newText);
    setCurrentRating(newRating);
    setIsEditing(false);
    updateReview({
      reviewId: id,
      review: { text: newText, rating: currentRating, id, userId },
    });
  };

  return (
    <li className="listItem">
      {text} - <UserContainer id={userId} />
      <Button title="Edit" onClick={handleEdit} />
      {isAuthorized && isEditing && (
        <ReviewForm
          initialState={{ text: currentText, rating: currentRating }}
          handleFormSubmit={handleSubmit}
          handleFormCancel={handleCancel}
        />
      )}
    </li>
  );
};
