import { GetStaticProps, InferGetStaticPropsType } from "next";
import { TalkContentHead, TalkContentHeadEncoded } from "src/contents/lib/talks/head";

type TalksIndexPageParams = {
  heads: TalkContentHeadEncoded[];
};

export default function TalksIndexPage({ heads }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  console.log(heads);
  return (
    <div>
      <h2>Talks index page</h2>
    </div>
  );
}

export const getStaticProps: GetStaticProps<TalksIndexPageParams> = async () => {
  const heads = await TalkContentHead.getAll();
  return { props: { heads: heads.map((head) => head.encode()) } };
};
