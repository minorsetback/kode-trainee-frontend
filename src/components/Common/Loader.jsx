import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
    Array(90).fill(0).map((e, i) => {
        return (
            <ContentLoader
                key={i}
                speed={2}
                width={343}
                height={84}
                viewBox="0 0 343 84"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                {...props}
                style={{ display: "block" }}
            >
                <circle cx="36" cy="42" r="36" />
                <rect x="88" y="25" rx="8" ry="8" width="144" height="16" />
                <rect x="88" y="47" rx="6" ry="6" width="80" height="12" />
            </ContentLoader>
        )
    })
)

export default Loader