const getReadList = () => {
  const readListStr = localStorage.getItem("Read-list");
  if (readListStr) {
    const readList = JSON.parse(readListStr);
    return readList;
  } else {
    return [];
  }
};

const addToReadList = (id) => {
  const storedReadlist = getReadList();

  if (storedReadlist.includes(id)) {
    console.log("already exist");
  } else {
    storedReadlist.push(id);
    const storedReadliststr = JSON.stringify(storedReadlist);
    localStorage.setItem("Read-list", storedReadliststr);
  }
};

// for wishList

const getWishList = () => {
  const getWishList = localStorage.getItem("wish-list");

  if (getWishList) {
    const strWishlist = JSON.parse(getWishList);
    return strWishlist;
  } else {
    return [];
  }
};

const addToWishList = (id) => {
  const wishList = getWishList();
  if (wishList.includes(id)) {
    console.log("Already exist in wish list!");
  } else {
    wishList.push(id);
    const wishListStr = JSON.stringify(wishList);
    localStorage.setItem("wish-list", wishListStr);
  }
};

export { addToReadList, addToWishList, getReadList, getWishList };
