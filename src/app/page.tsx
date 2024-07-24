import { Container, Filters, Title } from "@/components/shared";
import { Categories } from "@/components/shared/categories";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { SortPopup } from "@/components/shared/sort-popup";
import { TopBar } from "@/components/shared/top-bar";
import { Button } from "@/components/ui/button";
import { useIntersection } from "react-use";
import React, { useEffect, useRef } from "react";

const Home = () => {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <div className="h-[1000px]">
        <Container className="pb-14 mt-10">
          <div className="flex gap-[60px]">
            <div className="w-[250px]">
              <Filters />
            </div>

            <div className="flex-1">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Cheezy pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    name: "Cheezy pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    name: "Cheezy pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    name: "Cheezy pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    name: "Cheezy pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    name: "Cheezy pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    items: [{ price: 500 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: "Cheezy pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    name: "Cheezy pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    name: "Cheezy pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    name: "Cheezy pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    name: "Cheezy pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    items: [{ price: 500 }],
                  },
                  {
                    id: 1,
                    name: "Cheezy pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EF438E93884BFEBFE79D11095AE2D4.avif",
                    items: [{ price: 500 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
