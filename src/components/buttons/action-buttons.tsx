import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Heart,
  Share2,
  Star,
  Trash2,
  Edit,
  Plus,
  Minus,
  Check,
  X,
  ArrowRight,
  Search,
  Filter,
  SortAsc,
  SortDesc,
} from "lucide-react";

// Cart Action Buttons
export const AddToCartButton = ({
  loading,
  onClick,
}: {
  loading?: boolean;
  onClick?: () => void;
}) => (
  <Button
    variant="default"
    size="lg"
    leftIcon={<ShoppingCart className="h-5 w-5" />}
    loading={loading}
    onClick={onClick}
  >
    Add to Cart
  </Button>
);

export const BuyNowButton = ({
  loading,
  onClick,
}: {
  loading?: boolean;
  onClick?: () => void;
}) => (
  <Button
    variant="success"
    size="lg"
    leftIcon={<ArrowRight className="h-5 w-5" />}
    loading={loading}
    onClick={onClick}
  >
    Buy Now
  </Button>
);

// Wishlist Action Buttons
export const AddToWishlistButton = ({
  loading,
  isInWishlist,
  onClick,
}: {
  loading?: boolean;
  isInWishlist?: boolean;
  onClick?: () => void;
}) => (
  <Button
    variant={isInWishlist ? "destructive" : "outline"}
    size="icon"
    leftIcon={<Heart className="h-5 w-5" />}
    loading={loading}
    onClick={onClick}
  >
    {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
  </Button>
);

// Share Button
export const ShareButton = ({
  loading,
  onClick,
}: {
  loading?: boolean;
  onClick?: () => void;
}) => (
  <Button
    variant="outline"
    size="icon"
    leftIcon={<Share2 className="h-5 w-5" />}
    loading={loading}
    onClick={onClick}
  >
    Share
  </Button>
);

// Review Action Buttons
export const RateButton = ({
  rating,
  loading,
  onClick,
}: {
  rating: number;
  loading?: boolean;
  onClick?: () => void;
}) => (
  <Button
    variant="outline"
    size="sm"
    leftIcon={<Star className="h-4 w-4" />}
    loading={loading}
    onClick={onClick}
  >
    Rate ({rating})
  </Button>
);

// CRUD Action Buttons
export const EditButton = ({
  loading,
  onClick,
}: {
  loading?: boolean;
  onClick?: () => void;
}) => (
  <Button
    variant="outline"
    size="sm"
    leftIcon={<Edit className="h-4 w-4" />}
    loading={loading}
    onClick={onClick}
  >
    Edit
  </Button>
);

export const DeleteButton = ({
  loading,
  onClick,
}: {
  loading?: boolean;
  onClick?: () => void;
}) => (
  <Button
    variant="destructive"
    size="sm"
    leftIcon={<Trash2 className="h-4 w-4" />}
    loading={loading}
    onClick={onClick}
  >
    Delete
  </Button>
);

// Quantity Control Buttons
export const QuantityButton = ({
  type,
  loading,
  onClick,
}: {
  type: "increase" | "decrease";
  loading?: boolean;
  onClick?: () => void;
}) => (
  <Button
    variant="outline"
    size="icon"
    leftIcon={type === "increase" ? <Plus className="h-4 w-4" /> : <Minus className="h-4 w-4" />}
    loading={loading}
    onClick={onClick}
  />
);

// Confirmation Buttons
export const ConfirmButton = ({
  loading,
  onClick,
}: {
  loading?: boolean;
  onClick?: () => void;
}) => (
  <Button
    variant="success"
    size="sm"
    leftIcon={<Check className="h-4 w-4" />}
    loading={loading}
    onClick={onClick}
  >
    Confirm
  </Button>
);

export const CancelButton = ({
  loading,
  onClick,
}: {
  loading?: boolean;
  onClick?: () => void;
}) => (
  <Button
    variant="destructive"
    size="sm"
    leftIcon={<X className="h-4 w-4" />}
    loading={loading}
    onClick={onClick}
  >
    Cancel
  </Button>
);

// Filter and Sort Buttons
export const FilterButton = ({
  loading,
  onClick,
}: {
  loading?: boolean;
  onClick?: () => void;
}) => (
  <Button
    variant="outline"
    size="sm"
    leftIcon={<Filter className="h-4 w-4" />}
    loading={loading}
    onClick={onClick}
  >
    Filter
  </Button>
);

export const SortButton = ({
  direction,
  loading,
  onClick,
}: {
  direction: "asc" | "desc";
  loading?: boolean;
  onClick?: () => void;
}) => (
  <Button
    variant="outline"
    size="sm"
    leftIcon={direction === "asc" ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
    loading={loading}
    onClick={onClick}
  >
    Sort {direction === "asc" ? "Ascending" : "Descending"}
  </Button>
);

export const SearchButton = ({
  loading,
  onClick,
}: {
  loading?: boolean;
  onClick?: () => void;
}) => (
  <Button
    variant="outline"
    size="icon"
    leftIcon={<Search className="h-4 w-4" />}
    loading={loading}
    onClick={onClick}
  />
); 