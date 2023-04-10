import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Alert from "Components/ui/Alert";
import CategorySkeleton from "Components/ui/Skeletons/CategorySkeleton";

import {
  RecipeImg,
  RecipeItem,
  RecipeTitle,
  RecipeTitleWrapper,
  RecipesList,
} from "Components/CategoryList/CategoryList.styled";

import {
  getSearchResultByIngredient,
  getSearchResultByTitle,
} from "redux/categories/operations";
import { selectCategories } from "redux/categories/selectors";
import {
  DefaultImg,
  DefaultImgWrapper,
  EmptyText,
} from "./SearchedRecipesList.styled";
import defaultImg from "../../assets/images/empty-img.png";
import SearchPagination from "Components/SearchPagination/SearchPagination";

const SearchedRecipesList = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    searchByTitle,
    searchByIngredient,
    currentPageTitle,
    currentPageIngredient,
    isLoading,
    error,
  } = useSelector(selectCategories);

  const valueQuery = searchParams.get("query");
  const valueIngredient = searchParams.get("ingredient");

  const [result, setResult] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (result === []) {
      setPage(1);
      return;
    } else {
      if (valueQuery !== null && valueQuery !== undefined) {
        setResult(searchByTitle);
        setPage(currentPageTitle);
      }
      if (valueIngredient !== null && valueIngredient !== undefined) {
        setResult(searchByIngredient);
        setPage(currentPageIngredient);
      }
    }
  }, [
    searchParams,
    result,
    searchByIngredient,
    searchByTitle,
    valueIngredient,
    valueQuery,
    currentPageIngredient,
    currentPageTitle,
  ]);

  useEffect(() => {
    if (
      valueQuery === null &&
      valueIngredient !== undefined &&
      valueIngredient !== ""
    ) {
      const type = "ingredient";
      const value = searchParams.get("ingredient");
      dispatch(getSearchResultByIngredient({ type, value, page }));
    }
    if (
      valueIngredient === null &&
      valueQuery !== undefined &&
      valueQuery !== ""
    ) {
      const type = "query";
      const value = searchParams.get("query");

      dispatch(getSearchResultByTitle({ type, value, page }));
    }
  }, [
    dispatch,
    setSearchParams,
    valueIngredient,
    valueQuery,
    searchParams,
    page,
  ]);

  return (
    <>
      {error && <Alert />}
      {isLoading ? (
        <CategorySkeleton />
      ) : (
        <>
          {result.length > 0 ? (
            <>
              <RecipesList>
                {result.map(({ _id, title, area, thumb }) => (
                  <RecipeItem key={_id}>
                    <Link to={`/recipe/${_id}`}>
                      <RecipeImg
                        src={thumb ? thumb : defaultImg}
                        alt={title}
                        loading="lazy"
                      />
                      <RecipeTitleWrapper>
                        <RecipeTitle>{title}</RecipeTitle>
                      </RecipeTitleWrapper>
                    </Link>
                  </RecipeItem>
                ))}
              </RecipesList>
              <SearchPagination />
            </>
          ) : (
            <DefaultImgWrapper>
              <DefaultImg src={defaultImg} alt="ingredients" />
              <EmptyText>Try looking for something else...</EmptyText>
            </DefaultImgWrapper>
          )}
        </>
      )}
    </>
  );
};

export default SearchedRecipesList;
