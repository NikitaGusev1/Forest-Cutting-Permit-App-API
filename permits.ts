import axios from 'axios';
import { load } from 'cheerio';

const url = 'http://kirtleidimai.amvmt.lt';

export const getPermits = async () => {
  try {
    const { data } = await axios.get(url);
    const $ = load(data);
    const rows = [];
    const selector = 'table';
    console.log('help');
    // $(selector).each((index, element) => {
    //   console.log($(element));
    // });
    console.table($(selector).children.length);
  } catch (error) {
    console.log(error);
  }
};
