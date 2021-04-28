```ts
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

export const getStaticProps: GetStaticProps = async context => {
  // ...
}

export const getStaticPaths: GetStaticPaths = async () => {
  // ...
}

export const getServerSideProps: GetServerSideProps = async context => {
  // ...
}
```

- https://velog.io/@eomttt/Poke-Docs-%EB%A7%8C%EB%93%A4%EA%B8%B0-NextJS-react-query