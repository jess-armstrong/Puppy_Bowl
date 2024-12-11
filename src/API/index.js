const cohortName = "2410-FTB-ET-WEB-FT";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

export async function fecthAllPuppies() {
  try {
    const reponse = await fetch(APIURL);
    const result = await reponse.json();
    return result;
  } catch (error) {
    console.error("Could not fetch puppies", error);
  }
}

export async function fetchSinglePuppy(puppyId) {
  try {
    const result = await fecthAllPuppies();
    const puppyList = result.data.players;

    const currentPuppy = puppyList.find(
      (element) => element.id === parseInt(puppyId)
    );
    return currentPuppy;
  } catch (error) {
    console.error(error);
  }
}

export async function addNewPuppy(name, breed, imageUrl) {
  try {
    console.log("in add new puppy");
    console.log(name);
    console.log(breed);
    console.log(imageUrl);

    const response = await fetch(APIURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        breed: breed,
        imageUrl: imageUrl,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function removePuppy(puppyId) {
  try {
    const response = await fetch(`${APIURL}/${puppyId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
