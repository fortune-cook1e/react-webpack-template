import React from 'react'
import classnames from 'classnames'
import styles from './index.module.less'

export type LoadingSize = 'small' | 'default' | 'large'

interface LoadingProps extends React.PropsWithChildren<any> {
  loading:boolean;
  size?:LoadingSize;
  tip?:string;
  className?:string;
  style?:React.CSSProperties;
  wrapperClassName?:string;
}

const Loading:React.FC<LoadingProps> = (props) => {
  const {
    loading = false,
    size = 'default',
    wrapperClassName = '',
    tip = '',
    children
  } = props

  const renderIndicator = () => {
    return (
      <span className={classnames(styles.loading_dot, styles.loading_dot_spin)}>
        <i className={styles.loading_dot_item} />
        <i className={styles.loading_dot_item} />
        <i className={styles.loading_dot_item} />
        <i className={styles.loading_dot_item} />
      </span>
    )
  }

  const isNestedPattern = () => {
    return !!(typeof children !== 'undefined')
  }

  const renderLoader = () => {
    const loaderClassNames = classnames({
      [styles.loading]: true,
      [styles.loading_isLoading]: loading,
      [styles.loading_show_tip]: !!tip
    })

    const loaderElement =  (
      <div className={loaderClassNames}>
        {renderIndicator()}
        {tip ? <div className={styles.loading_tip}>{tip}</div> : null}
      </div>
    )

    if (isNestedPattern()) {
      return (
        <div className={classnames(styles.loading_nested, wrapperClassName)}>
          {loading && <div key='loading'>{loaderElement}</div>}
          <div className={classnames({
            [styles.loading_container]: true,
            [styles.loading_blur]: loading
          })}
          >
            {children}
          </div>
        </div>
      )
    }
    return loaderElement
  }

  return (
    <>
      {renderLoader()}
    </>
  )
}

export default Loading