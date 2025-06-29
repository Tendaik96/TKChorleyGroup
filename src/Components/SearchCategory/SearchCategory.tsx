import React from 'react'
import styles from './SearchCategory.module.css'
import { useSearchResultsValue, useSearchValue } from '../../Context/search';
import Card from '../Card/Card';

export default function SearchCategory() {

    const searchResults = useSearchResultsValue()

  return (
    <div className={styles.cardContainer}>
      {searchResults.map((item: any) => {
        return (
          <div>
            <Card key={item.id} reports={item} />
          </div>
        );
      })}
    </div>
  );
}
