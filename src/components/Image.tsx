import { FC } from "react";
interface Props {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  webp?: boolean;
  sp?: boolean;
  x2?: boolean;
  lazyload?: boolean;
  ext?: "jpg" | "png";
}

// import "lazysizes"; は _app.tsx で import

/**
 * オリジナルの画像表示コンポーネント
 * @param sp: _sp 画像があるかどうか
 * @param webp: .webp 画像があるかどうか
 * @param x2: 2x画像があるかどうか
 * @param lazyload: lazysizesを使用してlazyloadするかどうか
 */
export const Image: FC<Props> = ({
  src,
  ext = "jpg",
  alt = "",
  width,
  height,
  webp,
  sp,
  x2,
  lazyload,
}) => {
  const srcPath = x2 ? `${src}@2x.${ext} 2x, ${src}.${ext}` : `${src}.${ext}`;

  const srcPathSp = x2
    ? `${src}_sp@2x.${ext} 2x, ${src}_sp.${ext}`
    : `${src}_sp.${ext}`;

  const srcPathWebp = x2 ? `${src}@2x.webp 2x, ${src}.webp` : `${src}.webp`;

  const srcPathSpWebp = x2
    ? `${src}_sp@2x.webp 2x, ${src}_sp.webp`
    : `${src}_sp.webp`;

  return (
    <picture>
      {lazyload === true ? (
        // lazyload
        <>
          {sp ? (
            <>
              {webp && (
                <source
                  media={"(max-width: 640px)"}
                  data-srcSet={srcPathSpWebp}
                  type="image/webp"
                />
              )}
              <source
                media={"(max-width: 640px)"}
                data-srcSet={srcPathSp}
                type={`image/${ext === "png" ? "png" : "jpeg"}`}
              />
              {webp && (
                <source
                  media={"(min-width: 641px)"}
                  data-srcSet={srcPathWebp}
                  type="image/webp"
                />
              )}
              <source
                media={"(min-width: 641px)"}
                data-srcSet={srcPath}
                type={`image/${ext === "png" ? "png" : "jpeg"}`}
              />
              <img
                className="lazyload"
                data-src={srcPath}
                alt={`${alt}`}
                width={width}
                height={height}
              />
            </>
          ) : (
            <>
              {webp && <source data-srcSet={srcPathWebp} type="image/webp" />}
              <source
                data-srcSet={srcPath}
                type={`image/${ext === "png" ? "png" : "jpeg"}`}
              />
              <img
                className="lazyload"
                data-src={srcPath}
                alt={`${alt}`}
                width={width}
                height={height}
              />
            </>
          )}
        </>
      ) : (
        // no lazyload
        <>
          {sp ? (
            <>
              {webp && (
                <source
                  media={"(max-width: 640px)"}
                  srcSet={srcPathSpWebp}
                  type="image/webp"
                />
              )}
              <source
                media={"(max-width: 640px)"}
                srcSet={srcPathSp}
                type={`image/${ext === "png" ? "png" : "jpeg"}`}
              />
              {webp && (
                <source
                  media={"(min-width: 641px)"}
                  srcSet={srcPathWebp}
                  type="image/webp"
                />
              )}
              <source
                media={"(min-width: 641px)"}
                srcSet={srcPath}
                type={`image/${ext === "png" ? "png" : "jpeg"}`}
              />
              <img
                className="lazyload"
                src={srcPath}
                alt={`${alt}`}
                width={width}
                height={height}
              />
            </>
          ) : (
            <>
              {webp && <source srcSet={srcPathWebp} type="image/webp" />}
              <source
                srcSet={srcPath}
                type={`image/${ext === "png" ? "png" : "jpeg"}`}
              />
              <img src={srcPath} alt={`${alt}`} width={width} height={height} />
            </>
          )}
        </>
      )}
    </picture>
  );
};
