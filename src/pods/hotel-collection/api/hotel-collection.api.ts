import * as ApiModel from './hotel-collection.api-model';
import Axios from 'axios';

const characterCollection = 'api/characters';

export const getCharacterCollection = async (): Promise<
  ApiModel.CharacterEntity[]
> => {
  const { data } = await Axios.get(characterCollection);
  return data;
};
