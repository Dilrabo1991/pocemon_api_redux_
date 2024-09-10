import request from "../index";

class PocemonApi {
    static GetPociAlbility = (params) => {
      return request.get(`/ability/`, { params });
    };
    static GetBerry = (id) => {
      return request.get(`/berry/`);
    };
    static GetBerryFlavor = (params) => {
      return request.get(`berry-flavor`, { ...params });
    };
    static GetCharacters = (params) => {
      return request.get(`/characteristic/`, { ...params });
    };
    static GetContest = () => {
      return request.get(`/contest-effect/`);
    };
    static GetContestType = (id) => {
      return request.get(`/contest-type`);
    };
    static GetEggGroup = (id) => {
      return request.get(`/egg-group/`);
    };
    static GetEncounter = (id) => {
      return request.get(`/encounter-condition/`);
    };
    static GetEncounterType = (id) => {
      return request.get(`/encounter-condition-value/`);
    };
    static GetEncounterMethod = (id) => {
      return request.get(`/encounter-method/`);
    };
    static GetEvolution = (id) => {
      return request.get(`/evolution-chain/`);
    };
    static GetEvolutionTrigger = (id) => {
      return request.get(`/evolution-trigger/`);
    };
    static GetGender = (id) => {
      return request.get(`/gender/`);
    };
    static GetGeneration = (id) => {
      return request.get(`/generation/`);
    };
    static GetGrowthRate = (id) => {
      return request.get(`/growth-rate/`);
    };
    static GetItem = (id) => {
      return request.get(`/item/`);
    };
    static GetItemAttribute = (id) => {
      return request.get(`/item-attribute/`);
    };
    static GetItemCategory = (id) => {
      return request.get(`/item-category/`);
    };
    static GetItemFlingEffect = (id) => {
      return request.get(`/item-fling-effect/`);
    };
    static GetItemPocket = (id) => {
      return request.get(`/item-pocket/`);
    };
    static GetLanguage = (id) => {
      return request.get(`/language/`);
    };
    static GetLocation = (id) => {
      return request.get(`/location/`);
    };
    static GetLocationArea = (id) => {
      return request.get(`/location-area/`);
    };
    static GetMachine = (id) => {
      return request.get(`/machine/`);
    };
    static GetMove = (id) => {
      return request.get(`/move/`);
    };
    static GetMoveAilment = (id) => {
      return request.get(`/move-ailment/`);
    };
    static GetMoveBattleStyle = (id) => {
      return request.get(`/move-battle-style/`);
  }

}
  
  export default PocemonApi;