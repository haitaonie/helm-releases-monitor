import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Px, commonStyles } from '../posize';

export default function IconStatus(props) {
  return (
    <div className={`icon-text ${css(styles.content_box, styles.content_box_layout)}`}>
            {renderMiddle()}
    </div>
  );

  function renderMiddle() {
    return <div className={css(styles.content_box_col1)}>
      <div

        style={{ '--src': `url(${require('assets/green.png')})` }}
        className={css(styles.icon, styles.icon_layout, commonStyles.clickable)}
        onClick={() => alert('Deployed')} />
    </div>;
  }
}

const styles = StyleSheet.create({
  content_box: {
    display: 'flex',
  },
  content_box_layout: {
    position: 'relative',
    overflow: 'visible',
    // width: 250,
    minWidth: 110,
    margin: 0
  },

  icon: {
    background: 'var(--src) center center / contain no-repeat',
    alignItems: 'center',
  },
  icon_layout: {

    height: 8,
    width: 8,
    position: 'absolute',
    right: 50,
    top: 5

  },

});
