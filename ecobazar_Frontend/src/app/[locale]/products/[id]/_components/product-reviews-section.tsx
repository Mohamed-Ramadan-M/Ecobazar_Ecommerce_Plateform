"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, Star, TicketPercent } from "lucide-react"
import Image from "next/image"
import { useState } from "react";


const ProductReviews = () => {
  const [value, setValue] = useState("Description");
  const reviewsData = [
    {
      id: 1,
      name: "Kristin Watson",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      rating: 5,
      date: "2 min ago",
      comment: "Duis at ullamcorper nulla, eu dictum eros."
    },
    {
      id: 2,
      name: "Jane Cooper",
      avatar: null, // Shows fallback avatar icon/circle
      rating: 4,
      date: "30 Apr, 2021",
      comment: "Keep the soil evenly moist for the healthiest growth. If the sun gets too hot, Chinese cabbage tends to \"bolt\" or go to seed; in long periods of heat, some kind of shade may be helpful. Watch out for snails, as they will harm the plants."
    },
    {
      id: 3,
      name: "Jacob Jones",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      rating: 5,
      date: "2 min ago",
      comment: "Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus."
    },
    {
      id: 4,
      name: "Ralph Edwards",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
      rating: 5,
      date: "2 min ago",
      comment: "200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds Heirloom Non-GMO Productive Brassica rapa VAR. chinensis, a.k.a. Canton's Choice, Bok Choi, from USA"
    }
  ];

  return (
    <div className="relative w-full bg-background p-6 md:p-8 " >
      {/* tabs section  */}
      <div className="w-full border-b flex  justify-center items-center">
        <Tabs defaultValue="Description" onValueChange={(value) => {
          setValue(value);
        }}>
          <TabsList variant="line" className="w-full " >
            <TabsTrigger value="Description">Description</TabsTrigger>
            <TabsTrigger value="Additional-Information">Additional Information</TabsTrigger>
            <TabsTrigger value="Customer-Feedback">Customer Feedback</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      {/* Description-Additional Information-Customer Feedback section */}
      <div className="w-full grid grid-cols-2 py-5">
        {value == "Description" &&
          <>
            <div className="col-span-1 p-5 px-10">
              Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.

              Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra.
              100 g of fresh leaves provides.
              Aliquam ac est at augue volutpat elementum.
              Quisque nec enim eget sapien molestie.
              Proin convallis odio volutpat finibus posuere.
              Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa.
            </div>
            <div className="col-span-1 flex flex-col items-center gap-5 p-3">
              <Image
                src={"/images/description_thumbnails.svg"}
                alt="description thumbnails"
                width={530}
                height={300} />

              <div className="flex  items-center shadow-2xl p-5 rounded-md gap-3" >
                <span className="flex items-center gap-3">
                  <TicketPercent color="#00B207" />
                  <span>
                    <h4 className="text-xl">64% Discount</h4>
                    <p className="opacity-60">Save your 64% money with us</p>
                  </span>
                </span>
                <span className="flex items-center gap-3">
                  <Leaf color="#00B207" />
                  <span>
                    <h4 className="text-xl">100% Organic</h4>
                    <p className="opacity-60">100% Organic Vegetables</p>
                  </span>
                </span>
              </div>
            </div>
          </>
        }
        {value == "Additional-Information" &&
          <>
            <div className="col-span-1 p-5 px-10">
              <p>weight : </p>
              <p>Color : </p>
              <p>Type : </p>
              <p>Category : </p>
              <p>Stock Status : </p>
              <p>Tags : Vegetables,Healthy,Chinese,Cabbage,Green Cabbage </p>
            </div>
            <div className="col-span-1 flex flex-col items-center gap-5 p-3">
              <Image
                src={"/images/description_thumbnails.svg"}
                alt="description thumbnails"
                width={530}
                height={300} />

              <div className="flex  items-center shadow-2xl p-5 rounded-md gap-3" >
                <span className="flex items-center gap-3">
                  <TicketPercent color="#00B207" />
                  <span>
                    <h4 className="text-xl">64% Discount</h4>
                    <p className="opacity-60">Save your 64% money with us</p>
                  </span>
                </span>
                <span className="flex items-center gap-3">
                  <Leaf color="#00B207" />
                  <span>
                    <h4 className="text-xl">100% Organic</h4>
                    <p className="opacity-60">100% Organic Vegetables</p>
                  </span>
                </span>
              </div>
            </div>
          </>
        }
        {value == "Customer-Feedback" &&
          <div className="w-full col-span-2 mx-auto py-6 px-10">
            <div className="divide-y divide-gray-200">
              {reviewsData.map((review) => (
                <div key={review.id} className="py-6 first:pt-0 last:pb-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {/* Avatar / Fallback */}
                      {review.avatar ? (
                        <Avatar>
                          <AvatarImage src={review.avatar} alt="@shadcn" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                          </svg>
                        </div>
                      )}

                      {/* Name & Star Ratings */}
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {review.name}
                        </h4>
                        <div className="flex items-center gap-0.5 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${i < review.rating
                                ? "text-amber-400 fill-amber-400"
                                : "text-gray-300 fill-gray-200"
                                }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Timestamp */}
                    <span className="text-xs text-gray-400 font-normal">
                      {review.date}
                    </span>
                  </div>

                  {/* Comment Body */}
                  <p className="text-gray-500 text-sm leading-relaxed pl-0 md:pl-13">
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="mt-4">
              <button className="px-8 py-2.5 bg-emerald-50 text-emerald-600 font-medium text-sm rounded-full hover:bg-emerald-100 transition-colors">
                Load More
              </button>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default ProductReviews