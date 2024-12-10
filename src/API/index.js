const cohortName = "2410-FTB-ET-WEB-FT";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

export async function fecthAllPuppies() {
  try {
    const reponse = await fetch(APIURL);
    const result = await reponse.json();
    return result;
  } catch (error) {
    console.error("Could not fetch players", error);
  }
}

export async function fetchSinglePuppy(playerId) {
  try {
    const result = await fecthAllPuppies();
    const puppyList = result.data.players;

    const currentPuppy = puppyList.find(
      (element) => element.id === parseInt(playerId)
    );
    return currentPuppy;
  } catch (error) {
    console.error(error);
  }
}
