import { Heading, ListItem, Paragraph, Space, UnorderedList } from "content-parts";

const Section = (): JSX.Element => (
  <>
    <Paragraph>
      ステージ上のすべての敵を倒すとステージが進み、プレイヤーのライフが回復します。
      最後のステージに待ち構えるボスを倒すとクリア。
      クリアすると、残りライフと経過時間からスコアが算出されます。ハイスコアを狙おう！
      ただし、残りライフが0になるとゲームオーバー。ライフは敵の攻撃に当たると減少します。
    </Paragraph>
    <Space size={2} />
    <Heading level="sub">操作方法（メニュー時）</Heading>
    <UnorderedList>
      <ListItem>↑↓←→：カーソル移動</ListItem>
      <ListItem>Z：決定</ListItem>
    </UnorderedList>
    <Space size={2} />
    <Heading level="sub">操作方法（ゲーム時）</Heading>
    <UnorderedList>
      <ListItem>↑↓←→：移動</ListItem>
      <ListItem>Z：剣を振る</ListItem>
      <ListItem>M：ポーズメニュー</ListItem>
    </UnorderedList>
  </>
);

export default Section;
