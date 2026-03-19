import React, { useMemo, useState } from "react";

// === ご主人が触るのはここだけ =========================
const PROFILE = {
  displayName: "LuNova Creater",
  tagline: "小さく作って早く出す。",
  bio: "個人開発で小さな便利を量産中。Xとnoteで開発ログと学びを発信しています。",
  links: {
    x: "https://x.com/@Lunova_create",
    note: "https://note.com/lunova_create",
    github: "https://github.com/lunovamainkaihatsu-coder",
  },
};

const APPS = [
  {
    id: "app-1",
    name: "タスク秒殺",
    tagline: "1分で終わるタスク管理",
    description: "ブラウザだけで動く極薄ToDo。ショートカット重視。",
    url: "https://todaystepapp-nxvxp7ztx4bkjtogrducv3.streamlit.app/",
    repo: "",
    tags: ["Web", "Productivity"],
    status: "公開中",
    updatedAt: "2025-11-15",
  },
  {
    id: "app-2",
    name: "かんたんタロット",
    tagline: "今日の一枚をサクッと引く。",
    description: "ワンクリックでタロットを1枚引いて、意味とメッセージを表示する簡易占いアプリ。",
    // ↓ここを、ご主人のタロットアプリのURLに差し替えてね
    url: "https://mainitiapp-ebjvjsi52r7ay9in3rky9u.streamlit.app/",
    repo: "",
    tags: ["Web", "Fortune", "Tarot"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-11-16",
  },
    {
    id: "app-3",
    name: "3分学習メーカー",
    tagline: "やる気が出ない日の三分学習",
    description: "今日はなんだかやる気が起きない！そんなときにクリックでやることを決めてくれます。",
    // ↓ここを、ご主人のタロットアプリのURLに差し替えてね
    url: "https://mainitiapp-mknkxzuyrl6aw4d5pxsbcc.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-11-17",
  },
    {
    id: "app-4",
    name: "イラストお題ジェネレーター",
    tagline: "イラストを描く時の今日のお題",
    description: "イラストを描きたい！練習したいけど、いっつも同じ構図になっちゃうの対策に！",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-g2mptiofvm6ct7lyq3uzen.streamlit.app/",
    repo: "",
    tags: ["Web","Illust"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-11-18",
  },
  {
    id: "app-5",
    name: "YES/NO迷宮",
    tagline: "YESとNOでの簡単な性格診断",
    description: "いきぬき用アプリです",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-8bfg9nf8o8da6asatswtgq.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-11-19",
  },
    {
    id: "app-6",
    name: "AI大喜利アプリ",
    tagline: "簡易的なAIでの大喜利アプリです",
    description: "いきぬき用アプリです",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-bh24xlbnylt2hirmjd7ntv.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-11-20",
  },
    {
    id: "app-7",
    name: "簡単ご飯メーカー",
    tagline: "献立をボタン一つで考えてくれるアプリです",
    description: "簡易的なアプリです",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitigohan-6t3gr5qqvjnrlfbhmtudrj.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-11-21",
  },
      {
    id: "app-8",
    name: "一行ポジティブメーカー",
    tagline: "落ち込んだ時に",
    description: "簡易的なアプリです",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-8hvmxnfdgk7zgxtb9nrdug.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-11-22",
  },
      {
    id: "app-9",
    name: "数あてゲーム",
    tagline: "1から100の間で数をあてるゲームです。",
    description: "簡易的なアプリです",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://kazuategame-tmx4rurxq9nwmfre3g99ut.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-11-23",
  },
      {
    id: "app-10",
    name: "猫占い的なやつ",
    tagline: "簡易的な猫占いです。猫の種類じゃないです。謎の猫です。",
    description: "また占いです。",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://day10nekouranai-lvjudbgcpaf8ctnfpqf3dq.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-11-24",
  },
        {
    id: "app-11",
    name: "変な文章メーカーを公開しました。",
    tagline: "単語を入力することで、変な文章を作成する役に立たないツールです",
    description: "息抜き用です",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://day11hennabunsho-jp4f3spkjypshq6uvch2ev.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-11-25",
  },
          {
    id: "app-12",
    name: "時間割アプリを公開しました。",
    tagline: "簡単な時間割作成アプリを作りました。",
    description: "今後より実用的なものを作りたいです",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-ktzef7jg8pxmvtxy493tet.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-11-26",
  },
          {
    id: "app-13",
    name: "ランダムヨガアプリを公開しました。",
    tagline: "ヨガの主なポーズをランダムで出します。",
    description: "ヨガを続けたいです",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://day13yogaapp-ngkzitxavngp9uzsmrgmej.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-11-27",
  },
            {
    id: "app-14",
    name: "中二病風占い",
    tagline: "少し変わった占いです。",
    description: "またまた占いです",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://day14chunibyouuranai-gpnecburbftfysxo9ma3i4.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-11-28",
  },
            {
    id: "app-15",
    name: "シューティングゲーム？",
    tagline: "ブラウザで動くシューティングゲーム的なやつです",
    description: "ゲームが作りたいですね",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://day15shootinggame-fnjpfp6bjqhale65xnnnv7.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-11-29",
  },
              {
    id: "app-16",
    name: "簡易ストレスチェッカー",
    tagline: "簡易的なストレスチェッカーと簡単なアドバイス",
    description: "ストレスは悪いものじゃないですけどね",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-lew2abvedtnne4yrkwcjar.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-11-30",
  },
              {
    id: "app-17",
    name: "簡易ゲームアイデアアプリ",
    tagline: "ゲームアイデアを簡単に出す",
    description: "ゲーム作りもやっていきたいな",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-mrwtmowwhzlumtrvmqphhc.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-1",
  },
              {
    id: "app-18",
    name: "簡単なゲームアプリ",
    tagline: "ミニゲームにも満たないレベルのゲーム",
    description: "ゲーム作り楽しい",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-jn6ryfhgz4ciminppe5y9q.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-2",
  },
              {
    id: "app-19",
    name: "簡単なデトックスアプリ",
    tagline: "溜まった思いを吐露しよう",
    description: "メンタルが一番大事",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://day19simpledetoxapp-bpujcjshoipyo8x2sq36ay.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-3",
  },
              {
    id: "app-20",
    name: "一言処方箋を公開しました",
    tagline: "メンタルケア",
    description: "メンタルが一番大事",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-v7fz9h9kscfmpbth8e7nwu.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-4",
  },
              {
    id: "app-21",
    name: "未来メッセージボックスアプリを公開しました。",
    tagline: "引き寄せ",
    description: "未来を信じていく",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-rwtbbn7tmxp5isyukp4xmh.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-5",
  },
              {
    id: "app-22",
    name: "神秘動物占いを公開しました。",
    tagline: "占い",
    description: "神秘的な動物",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://day22animalfortune-bsr7xnjosxplx69d6jmkvz.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-6",
  },
              {
    id: "app-23",
    name: "一言ほめるアプリ",
    tagline: "褒める",
    description: "褒め",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-ra4kaplsxwigkb5px9u6cw.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-7",
  },
              {
    id: "app-24",
    name: "自由度チェッカー",
    tagline: "自由",
    description: "自由でいたい",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://day24freescoreapp-iqubas3v4cazduoehjxxsy.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-8",
  },
              {
    id: "app-25",
    name: "こども気分チェッカー & 親フォロー",
    tagline: "親のため",
    description: "子育ては大変",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-3ssjnf78bjxuenkr4qvagg.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-9",
  },
              {
    id: "app-26",
    name: "17秒×4 願望フォーカスルーム",
    tagline: "願望実現",
    description: "願いを叶える",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-8q35baxkwtmfabxyhw8x5b.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-10",
  },
                {
    id: "app-27",
    name: "ルナに聞け！即アンサー",
    tagline: "質問を聞く",
    description: "答えるよ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-dzxy9g6lzerrhgmm9rmuha.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-11",
  },
                {
    id: "app-28",
    name: "簡易宝くじ占い",
    tagline: "宝くじ",
    description: "あたるといいね",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://takarakuji-adsc7ecksukz3retut4wrj.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-12",
  },
                {
    id: "app-29",
    name: "気付かせAI",
    tagline: "今日の気づき",
    description: "メンタルは重要",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-nwn3etkxinfvhlby43gjwl.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-13",
  },
                {
    id: "app-30",
    name: "数秘術占いアプリ",
    tagline: "簡易アプリ",
    description: "占い好き",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-jov3yy3z9zyjgkttywfgfx.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-14",
  },
                {
    id: "app-31",
    name: "年末おそうじチェック",
    tagline: "掃除チェック",
    description: "年末ですね",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-fewk4yqdnkzvtukzjvuitj.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-15",
  },
                {
    id: "app-32",
    name: "人生パターン診断アプリ",
    tagline: "人生を優しく診断",
    description: "診断しよう",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-5rszph3edlxtotsjofktdj.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-15",
  },
                {
    id: "app-33",
    name: "お年玉管理アプリ",
    tagline: "大人向け",
    description: "いくらもらっていくらだしたか",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-3ffmd5e396yjm3yg3lpyxx.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-16",
  },
                {
    id: "app-34",
    name: "頭の中ごちゃごちゃ整理アプリ",
    tagline: "頭の中",
    description: "整理しよう",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-c6qlgzzvasn9wegf3gkqrc.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-17",
  },
                {
    id: "app-35",
    name: "勉強タイマー",
    tagline: "勉強",
    description: "集中しよう",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-5ziwaohmeorh5pxvykpg5e.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-18",
  },
                {
    id: "app-36",
    name: "スケジュールアプリ",
    tagline: "時間管理",
    description: "何をやるか",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-cx2kztsvbwokwimmemnao8.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-20",
  },
                {
    id: "app-37",
    name: "まいにち運気家計簿",
    tagline: "占いと家計簿",
    description: "運気は参考程度",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-kutv8c7cr8anoyk89ruova.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-21",
  },
                {
    id: "app-38",
    name: "購入予定・発売日リスト",
    tagline: "買うもの選別",
    description: "買うか買わないか",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-ydeqym9qpyphltykzcnpsh.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-22",
  },
                {
    id: "app-39",
    name: "なにもしない",
    tagline: "なにもしない",
    description: "なにもしない",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-xm7leystrwcst4g4ytk7l3.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-23",
  },
                {
    id: "app-40",
    name: "迷いもの熟成リスト",
    tagline: "買うかどうか",
    description: "迷ったら",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-b2jpszh2pcmfgxx5wwyqr2.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-24",
  },
                {
    id: "app-41",
    name: "余白アプリ",
    tagline: "余白が重要",
    description: "余白",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-h8vvvu5hnnkbhrzf5zspeh.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-26",
  },
                {
    id: "app-42",
    name: "やらないことリスト",
    tagline: "やらないことも重要",
    description: "断捨離",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-fqcvfzxgksofctegovygq7.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-28",
  },
                {
    id: "app-43",
    name: "今日の自分、合格？",
    tagline: "自分を許す",
    description: "許可",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-hf2rywluegdqkw8s8qmmx6.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-30",
  },
                {
    id: "app-44",
    name: "今年のありがとう3つだけアプリ",
    tagline: "2025年最後",
    description: "ありがとうございました",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-n8nv87rh5wtm7w65mwxkyo.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2025-12-31",
  },
                {
    id: "app-45",
    name: "今年、まだこれだけある",
    tagline: "2026年最初",
    description: "ありがとうございます",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-wxzfqmkedsl4aask6wndck.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-1-5",
  },
                {
    id: "app-46",
    name: "ミニご褒美ガチャ",
    tagline: "ご褒美",
    description: "簡易的",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-ax3ytkxsnyzfl29vd8ubes.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-1-7",
  },
                {
    id: "app-47",
    name: "来年目標ジェネレーター",
    tagline: "来年というか今年",
    description: "目標",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitigohan-ucvkmu5dhdgtu39qxgw27p.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-1-8",
  },
                {
    id: "app-48",
    name: "続いている可視化アプリ",
    tagline: "できているということ",
    description: "継続",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-krbufsyjfrmtiadubsdcbg.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-1-9",
  },
                {
    id: "app-49",
    name: "継続トラッカー",
    tagline: "継続",
    description: "継続",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-ybggcw4z6hhukt2dbhmywq.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-1-10",
  },
                {
    id: "app-50",
    name: "ここまできた",
    tagline: "きたよ",
    description: "ここまで",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-jjvhxrcj77wj7l4jalinqg.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-1-12",
  },
                {
    id: "app-51",
    name: "やりたいこと100",
    tagline: "今生でやりたいこと",
    description: "100個",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-eypzkggfrmr5ld32sxtwsh.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-1-13",
  },
                {
    id: "app-52",
    name: "朝活15分アプリ",
    tagline: "朝活",
    description: "15分",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-swmgnfcylyw7x6okdj6bjq.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-1-14",
  },
                {
    id: "app-53",
    name: "一言予言アプリ",
    tagline: "占い",
    description: "予言",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-eqcplyz5pyl2vnrb7hy5hv.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-1-15",
  },
                {
    id: "app-54",
    name: "簡単怪談ジェネレーターアプリ",
    tagline: "怪談",
    description: "ジェネレーター",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-nmzbpou9npb6yfdmtsnkzm.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-1-16",
  },
                {
    id: "app-55",
    name: "簡易夢占い",
    tagline: "占い",
    description: "夢占い",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-gj4q9aqemkl9pedqbfwuve.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-1-17",
  },
                {
    id: "app-56",
    name: "簡易金運夢占い",
    tagline: "占い",
    description: "夢占い",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-jufkrzlanxwbr3ag8fhgnz.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-1-18",
  },
                {
    id: "app-57",
    name: "簡易恋愛運夢占い",
    tagline: "占い",
    description: "夢占い",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-nbxywk8zgg8a88pfpfexcv.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-1-19",
  },
                {
    id: "app-58",
    name: "簡易仕事運夢占い",
    tagline: "占い",
    description: "夢占い",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-5xyajxwkynn9ethck3b2aq.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-1-20",
  },
                {
    id: "app-59",
    name: "簡易健康運夢占い",
    tagline: "占い",
    description: "夢占い",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-wgjhhx2gftnis7tx8hozqx.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-1-21",
  },
                {
    id: "app-60",
    name: "簡易対人運夢占い",
    tagline: "占い",
    description: "夢占い",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-3josneo6b9svenuuo326fv.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-1-22",
  },
                {
    id: "app-61",
    name: "簡易総合運夢占い",
    tagline: "占い",
    description: "夢占い",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-mbu7jqcmjb9lmam5qgbqca.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-1-23",
  },
                {
    id: "app-62",
    name: "深夜の一言アプリ",
    tagline: "一言",
    description: "一言",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-s6e9fer6yvfjm7cztfhnnv.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-1-26",
  },
                {
    id: "app-63",
    name: "ちょっと怖いUIテスト",
    tagline: "こわい",
    description: "テスト",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-bcwapdukonhyzbzjfenyfp.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-1-27",
  },
                {
    id: "app-64",
    name: "闇がみえる心理テスト",
    tagline: "こわい",
    description: "テスト",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-lns8aimuineev6kpcmappyo.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-1-29",
  },
                {
    id: "app-65",
    name: "今日の回復アクションAIを公開しました",
    tagline: "回復アクション",
    description: "回復しよう",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-xkcfezfp2ocbrcvwulqjzn.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-1-30",
  },
                {
    id: "app-66",
    name: "自分を褒めるAIを公開しました",
    tagline: "回復アクション",
    description: "回復しよう",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-zynmqermuzk5pnrver44p6.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-2-2",
  },
                {
    id: "app-67",
    name: "夜の3分整えアプリを公開しました",
    tagline: "回復アクション",
    description: "回復しよう",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-6qgse35ymbagh2qrptif5r.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-2-3",
  },
                {
    id: "app-68",
    name: "明日のひとつだけAI",
    tagline: "ひとつだけ",
    description: "やってみよう",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitigohan-yxwvjysdu33wnoycjxcye6.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-2-4",
  },
                {
    id: "app-69",
    name: "週の最小目標AI",
    tagline: "週の目標",
    description: "やってみよう",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-rjm4j6rbdecbu3sfsgybcv.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-2-6",
  },
                {
    id: "app-70",
    name: "週の振り返りAI",
    tagline: "週の目標",
    description: "やってみよう",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-ckpe8mqgb7ahbmqpajwcbg.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-2-7",
  },
                {
    id: "app-71",
    name: "一行家計簿",
    tagline: "お金の管理",
    description: "家計簿",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-hxlhmtz9j6mqso8ay8m5pu.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-2-8",
  },
                {
    id: "app-72",
    name: "神経衰弱",
    tagline: "ゲーム",
    description: "ゲーム",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-ucxw68veadvdfracjkhx38.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-2-9",
  },
                {
    id: "app-73",
    name: "支払い日リマインダー",
    tagline: "支出",
    description: "固定費",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-jnxd67rthvqheemzzkcbyf.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-2-10",
  },
                {
    id: "app-74",
    name: "戦隊あわせ",
    tagline: "戦隊",
    description: "〇〇戦隊〇〇ジャー",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-8tebqxthygvmhagqim7fzp.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-2-12",
  },
                {
    id: "app-75",
    name: "ヒーロー診断",
    tagline: "ヒーロー",
    description: "診断",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-hn6nyzzrqthxabnbbwfv4n.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-2-13",
  },
                {
    id: "app-76",
    name: "必殺技メーカー",
    tagline: "必殺技",
    description: "メーカー",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-mg6eeuybccvzufy892ccqd.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-2-16",
  },
                {
    id: "app-77",
    name: "名言メーカー",
    tagline: "名言",
    description: "メーカー",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-eahzon8n7jmvsjzv3sbosq.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-2-17",
  },
                {
    id: "app-78",
    name: "ヒーロー製造機",
    tagline: "ヒーロー",
    description: "メーカー",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-n8294he3o6wdrqwusabdyz.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-2-19",
  },
                {
    id: "app-79",
    name: "デスティニーログ",
    tagline: "運命",
    description: "記録",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-hxjcwmvbdfhfpw4ecejfuz.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-2-24",
  },
                {
    id: "app-80",
    name: "毎日ルーティンチェック",
    tagline: "ルーティン",
    description: "記録",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-y6zoncuhzcvbp2mtrjtvfm.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-2-25",
  },
                  {
    id: "app-81",
    name: "ルーティンチェック",
    tagline: "ルーティン",
    description: "記録",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-lbemjm95amxzgxnrhzxx2k.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-2-26",
  },
                  {
    id: "app-82",
    name: "エナジーチェック",
    tagline: "エネルギー",
    description: "記録",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-hnsymtwybhm5wdbye2p7vt.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-3-2",
  },
                  {
    id: "app-83",
    name: "今日やるべき1つ",
    tagline: "やるべきこと",
    description: "何か一つ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-9yepbevgpyanmpk7avjlzl.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-3-3",
  },
                  {
    id: "app-84",
    name: "アイデア保管庫",
    tagline: "アイデア",
    description: "保管庫",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-ki3rmcjazi7qbjdwfrixe5.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-3-4",
  },
                  {
    id: "app-85",
    name: "アイデア収益化",
    tagline: "アイデア",
    description: "収益化",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-z9yoklr2cqmbryay8lgqcw.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-3-5",
  },
                  {
    id: "app-86",
    name: "ライフダッシュボード",
    tagline: "ライフ",
    description: "ダッシュボード",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-uig5nrrfom4ci9gvhxhjnk.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-3-6",
  },
                  {
    id: "app-87",
    name: "ライフレベルシステム",
    tagline: "ライフ",
    description: "レベル",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-jwkzkebi4mgtpe3ggsiuun.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-3-10",
  },
                  {
    id: "app-88",
    name: "世界線ルーレット",
    tagline: "世界線",
    description: "ルーレット",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-w5appvqz5vxwaiet7tnxzxm.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-3-11",
  },
                  {
    id: "app-89",
    name: "称号コレクション",
    tagline: "称号",
    description: "コレクション",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-la896jekok6w23ftsjcrgm.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-3-12",
  },
                  {
    id: "app-90",
    name: "AI人生コーチング",
    tagline: "AI",
    description: "コーチング",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-2vjm6pnuwavpf7feksf9oe.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-3-13",
  },
                 {
    id: "app-91",
    name: "AI相談室",
    tagline: "AI",
    description: "相談室",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-uyvjyzbhrzcvfdvhc7ynak.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-3-13",
  },
                 {
    id: "app-92",
    name: "ルナ日記",
    tagline: "ルナ",
    description: "日記",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-kpqurhvac7oqkcwpdez4cn.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-3-17",
  },
                 {
    id: "app-93",
    name: "感情マップ",
    tagline: "感情",
    description: "マップ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-wgf23ujcmvawvecxtgxfaw.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-3-18",
  },
                 {
    id: "app-94",
    name: "ごきげん予報",
    tagline: "機嫌",
    description: "予報",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-gzobkxxvfhsdqwsxaavsxg.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-3-19",
  },
];

const POSTS = [
  {
    id: "note-1",
    title: "今日の一歩アプリ：APIなし版",
    date: "2025-11-15",
    url: "https://note.com/lunova_create/n/n9e7fee8a1914",
    tags: ["DevLog", "Design"],
  },
  {
    id: "note-2",
    title: "簡易タロット占いアプリを公開しました",
    // 公開した日
    date: "2025-11-16",
    // ↓ここをタロット記事のURLに変える
    url: "https://note.com/lunova_create/n/nfb2f5371b1ed?app_launch=false",
    tags: ["DevLog", "Tarot"],
  },
  {
    id: "note-3",
    title: "３分学習メーカーを公開しました",
    // 公開した日
    date: "2025-11-17",
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/neb4ecddaba0b?app_launch=false",
    tags: ["DevLog"],
  },
 {
    id: "note-4",
    title: "イラストお題ジェネレーター",
    // 公開した日
    date: "2025-11-18", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n734ce7d3dcf8?app_launch=false",
    tags: ["DevLog","Illust"],
  },
 {
    id: "note-5",
    title: "YESNO迷宮を公開しました。",
    // 公開した日
    date: "2025-11-19", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n02b121e10022",
    tags: ["DevLog"],
  },
   {
    id: "note-6",
    title: "AI大喜利アプリを公開しました。",
    // 公開した日
    date: "2025-11-20", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n496bb1e55919",
    tags: ["DevLog"],
  },
   {
    id: "note-7",
    title: "簡単ご飯メーカーを公開しました。",
    // 公開した日
    date: "2025-11-21", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nc7046b63d345?app_launch=false",
    tags: ["DevLog"],
  },
   {
    id: "note-8",
    title: "一行ポジティブメーカーを公開しました。",
    // 公開した日
    date: "2025-11-22", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n49c85619ad30?app_launch=false",
    tags: ["DevLog"],
  },
     {
    id: "note-9",
    title: "数あてゲームを公開しました。",
    // 公開した日
    date: "2025-11-23", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n181249046a39?app_launch=false",
    tags: ["DevLog"],
  },
     {
    id: "note-10",
    title: "猫占い的なものを公開しました。",
    // 公開した日
    date: "2025-11-24", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nd2e69e5e3234",
    tags: ["DevLog"],
  },
       {
    id: "note-11",
    title: "変な文章メーカーを公開しました。",
    // 公開した日
    date: "2025-11-25", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n63cecd469778?app_launch=false",
    tags: ["DevLog"],
  },
       {
    id: "note-12",
    title: "時間割アプリを公開しました。",
    // 公開した日
    date: "2025-11-26", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/ncdf6e0800574?app_launch=false",
    tags: ["DevLog"],
  },
       {
    id: "note-13",
    title: "ランダムヨガを公開しました。",
    // 公開した日
    date: "2025-11-27", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n6911390db91d",
    tags: ["DevLog"],
  },
       {
    id: "note-14",
    title: "中二病風占いを公開しました。",
    // 公開した日
    date: "2025-11-28", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nff812f91ce6f?app_launch=false",
    tags: ["DevLog"],
  },
       {
    id: "note-15",
    title: "シューティングゲームを公開しました。",
    // 公開した日
    date: "2025-11-29", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n0301ae2089f2?app_launch=false",
    tags: ["DevLog"],
  },
       {
    id: "note-16",
    title: "簡易的なストレスチェッカーを公開しました。",
    // 公開した日
    date: "2025-11-30", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n8cc7f7e672c0",
    tags: ["DevLog"],
  },
  {
    id: "note-17",
    title: "簡易的なゲームアイデアを公開しました。",
    // 公開した日
    date: "2025-12-1", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n111645309f95?app_launch=false",
    tags: ["DevLog"],
  },
  {
    id: "note-18",
    title: "簡易的なゲームアプリを公開しました。",
    // 公開した日
    date: "2025-12-2", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n76d33d0bf12a?app_launch=false",
    tags: ["DevLog"],
  },
  {
    id: "note-19",
    title: "簡単なデトックスアプリを公開しました",
    // 公開した日
    date: "2025-12-3", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n1ffbbb4cc193?app_launch=false",
    tags: ["DevLog"],
  },
  {
    id: "note-20",
    title: "一言処方箋アプリを公開しました",
    // 公開した日
    date: "2025-12-4", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n840b1257e722?app_launch=false",
    tags: ["DevLog"],
  },
  {
    id: "note-21",
    title: "未来メッセージボックスアプリを公開しました。",
    // 公開した日
    date: "2025-12-5", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n4c8385649065?app_launch=false",
    tags: ["DevLog"],
  },
  {
    id: "note-22",
    title: "神秘動物占いを公開しました。",
    // 公開した日
    date: "2025-12-6", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n8f4444a57eb5?app_launch=false",
    tags: ["DevLog"],
  },
  {
    id: "note-23",
    title: "一言ほめアプリを公開しました。",
    // 公開した日
    date: "2025-12-7", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nc6c1d624f254?app_launch=false",
    tags: ["DevLog"],
  },
  {
    id: "note-24",
    title: "自由度メーターを公開しました。",
    // 公開した日
    date: "2025-12-8", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n2de997fe5d78?app_launch=false",
    tags: ["DevLog"],
  },
  {
    id: "note-25",
    title: "こども気分チェッカー & 親フォローを公開しました",
    // 公開した日
    date: "2025-12-9", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nae163f534bf7?app_launch=false",
    tags: ["DevLog"],
  },
  {
    id: "note-26",
    title: "17秒×4 願望フォーカスルーム",
    // 公開した日
    date: "2025-12-10", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n16ebfb1ae800?app_launch=false",
    tags: ["DevLog"],
  },
  {
    id: "note-27",
    title: "ルナに聞け！即アンサー",
    // 公開した日
    date: "2025-12-11", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n833c0117a849?app_launch=false",
    tags: ["DevLog"],
  },
  {
    id: "note-28",
    title: "簡易宝くじアプリ",
    // 公開した日
    date: "2025-12-12", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n439bf99bb1da",
    tags: ["DevLog"],
  },
  {
    id: "note-29",
    title: "気付きアプリ",
    // 公開した日
    date: "2025-12-13", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n14fa684bce04?app_launch=false",
    tags: ["DevLog"],
  },
  {
    id: "note-30",
    title: "数秘術占い簡易版",
    // 公開した日
    date: "2025-12-14", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nc3b45f235a8b?app_launch=false",
    tags: ["DevLog"],
  },
  {
    id: "note-31",
    title: "年末そうじチェックアプリを公開しました",
    // 公開した日
    date: "2025-12-15", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nb15df7e89d5d?app_launch=false",
    tags: ["DevLog"],
  },
  {
    id: "note-32",
    title: "人生パターン診断を公開しました",
    // 公開した日
    date: "2025-12-16", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n2f72af00e7f4?app_launch=false",
    tags: ["DevLog"],
  },
  {
    id: "note-33",
    title: "お年玉管理アプリを公開しました",
    // 公開した日
    date: "2025-12-16", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n4d644e60d411?app_launch=false",
    tags: ["DevLog"],
  },
  {
    id: "note-34",
    title: "頭の中野ごちゃごちゃ整理アプリを公開しました",
    // 公開した日
    date: "2025-12-17", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n138158a36d00?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-35",
    title: "勉強タイマーを公開しました",
    // 公開した日
    date: "2025-12-18", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nb15cb022c970?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-36",
    title: "スケジュールアプリを公開しました",
    // 公開した日
    date: "2025-12-20", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nac1cfeb844d0?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-37",
    title: "まいにち運気家計簿を公開しました。",
    // 公開した日
    date: "2025-12-21", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n31aef8746063?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-38",
    title: "購入予定・発売日リストを公開しました。",
    // 公開した日
    date: "2025-12-22", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n6e555735fe46?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-39",
    title: "なにもしない宣言を公開しました。",
    // 公開した日
    date: "2025-12-23", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n3b17455adfb2?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-40",
    title: "迷いもの熟成リストを公開しました",
    // 公開した日
    date: "2025-12-24", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/ncaba85ea2e52?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-41",
    title: "余白アプリを公開しました",
    // 公開した日
    date: "2025-12-26", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n378ec9d48fd9?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-42",
    title: "やらないことを公開しました",
    // 公開した日
    date: "2025-12-28", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n20dca9158b01",
    tags: ["DevLog"],
  },
    {
    id: "note-43",
    title: "今日の自分合格？アプリを公開しました",
    // 公開した日
    date: "2025-12-30", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n8e377c676b93?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-44",
    title: "今年のありがとう、3つだけアプリを公開しました",
    // 公開した日
    date: "2025-12-31", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n35a166e8ddcf?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-45",
    title: "今年、まだこれだけあるアプリを公開しました",
    // 公開した日
    date: "2026-1-5", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n00c0104ec8cb?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-46",
    title: "ミニご褒美ガチャを公開しました",
    // 公開した日
    date: "2026-1-7", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nf2ffde302b2b?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-47",
    title: "来年目標ジェネレーターを公開しました",
    // 公開した日
    date: "2026-1-8", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/ndec95fd11af9?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-48",
    title: "ちゃんと続いている可視化アプリを公開しました",
    // 公開した日
    date: "2026-1-9", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n08abe5e328b7?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-49",
    title: "継続トラッカーアプリを公開しました",
    // 公開した日
    date: "2026-1-10", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nfd661c6b118b?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-50",
    title: "50日目",
    // 公開した日
    date: "2026-1-12", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n58567aecd01a",
    tags: ["DevLog"],
  },
    {
    id: "note-51",
    title: "やりたいこと100を公開しました",
    // 公開した日
    date: "2026-1-13", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n6df47b20ab70?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-52",
    title: "朝活スイッチ15分アプリを公開しました",
    // 公開した日
    date: "2026-1-14", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n2c711433405d?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-53",
    title: "一言予言アプリを公開しました",
    // 公開した日
    date: "2026-1-15", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n8b2eb59b3b66?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-54",
    title: "簡易怪談ジェネレーターアプリを公開しました",
    // 公開した日
    date: "2026-1-16", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n5bf2cc0a9280?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-55",
    title: "簡易夢占いアプリを公開しました",
    // 公開した日
    date: "2026-1-17", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n8337295a4ec1?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-56",
    title: "簡易金運夢占いアプリを公開しました",
    // 公開した日
    date: "2026-1-18", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/notes/na94f1a82a284/landing?puid=90101601-99ac-4bed-ae69-2d66b23d5093",
    tags: ["DevLog"],
  },
    {
    id: "note-57",
    title: "簡易恋愛運夢占いアプリを公開しました",
    // 公開した日
    date: "2026-1-19", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n4c7a27d72ed9?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-58",
    title: "簡易仕事運夢占いアプリを公開しました",
    // 公開した日
    date: "2026-1-20", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nfef04a3e2fd8?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-59",
    title: "簡易健康運夢占いアプリを公開しました",
    // 公開した日
    date: "2026-1-21", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nb7552042cb1f?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-60",
    title: "簡易対人運夢占いアプリを公開しました",
    // 公開した日
    date: "2026-1-22", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nf14eae592f12?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-61",
    title: "簡易総合運夢占いアプリを公開しました",
    // 公開した日
    date: "2026-1-23", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nc368ebbcb151?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-62",
    title: "深夜の一言アプリを公開しました",
    // 公開した日
    date: "2026-1-26", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n4c0bc18f9350",
    tags: ["DevLog"],
  },
    {
    id: "note-63",
    title: "ちょっとだけ怖いUIを公開しました",
    // 公開した日
    date: "2026-1-27", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n305446359415?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-64",
    title: "闇がみえる心理テストを公開しました",
    // 公開した日
    date: "2026-1-29", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n12033c3d3b3d?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-65",
    title: "今日の回復アクションAIを公開しました",
    // 公開した日
    date: "2026-1-30", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n9f5ca863a887?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-66",
    title: "自分を褒めるAIを公開しました",
    // 公開した日
    date: "2026-2-2", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n4b7dfea69fee?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-67",
    title: "夜の3分整えアプリを公開しました",
    // 公開した日
    date: "2026-2-3", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n848531fa20d8?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-68",
    title: "明日のひとつだけAIアプリを公開しました",
    // 公開した日
    date: "2026-2-4", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/notes/naa267c901a88/landing?puid=cceba3ca-16e1-4044-9ae5-9d699719305a",
    tags: ["DevLog"],
  },
    {
    id: "note-69",
    title: "週の最小目標AIアプリを公開しました",
    // 公開した日
    date: "2026-2-6", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n3195bafe3cd0?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-70",
    title: "週の振り返りAIアプリを公開しました",
    // 公開した日
    date: "2026-2-7", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nd7389d8f116e?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-71",
    title: "一行家計簿を公開しました",
    // 公開した日
    date: "2026-2-8", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n43a707e0224f",
    tags: ["DevLog"],
  },
    {
    id: "note-72",
    title: "神経衰弱ゲームを公開しました",
    // 公開した日
    date: "2026-2-9", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n088c8f4a5191?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-73",
    title: "支払日リマインダーを公開しました",
    // 公開した日
    date: "2026-2-10", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/ne30bd0ae07b8",
    tags: ["DevLog"],
  },
    {
    id: "note-74",
    title: "戦隊合わせを公開しました",
    // 公開した日
    date: "2026-2-12", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n7a761790c1cd?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-75",
    title: "ヒーロー診断を公開しました",
    // 公開した日
    date: "2026-2-13", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n7ca56cbb065b?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-76",
    title: "必殺技メーカーを公開しました",
    // 公開した日
    date: "2026-2-16", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/notes/nda40d1ee481d/landing?puid=b747dd74-5849-438c-8cbe-a1ef6684066c",
    tags: ["DevLog"],
  },
    {
    id: "note-77",
    title: "名言メーカーを公開しました",
    // 公開した日
    date: "2026-2-17", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n377593643d09?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-78",
    title: "ヒーロー製造機を公開しました",
    // 公開した日
    date: "2026-2-19", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nf76956a17e0e?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-79",
    title: "デスティニーログを公開しました",
    // 公開した日
    date: "2026-2-24", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nc9ecd69b8d08?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-80",
    title: "毎日のルーティンアプリを公開しました",
    // 公開した日
    date: "2026-2-25", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nad0acbff86c4?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-81",
    title: "ルーティン（朝・昼・夜）アプリを公開しました",
    // 公開した日
    date: "2026-2-26", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n426687cf6fd3?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-82",
    title: "エネルギーメーターアプリを公開しました",
    // 公開した日
    date: "2026-3-2", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n30efa50943b4",
    tags: ["DevLog"],
  },
    {
    id: "note-83",
    title: "今日やるべきこと一つを公開しました",
    // 公開した日
    date: "2026-3-3", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n8014b04f7838?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-84",
    title: "アイデア保管庫を公開しました",
    // 公開した日
    date: "2026-3-4", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nce323808dabc?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-85",
    title: "アイデア収益化を公開しました",
    // 公開した日
    date: "2026-3-5", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/naa9d7857880a?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-86",
    title: "ライフダッシュボードを公開しました",
    // 公開した日
    date: "2026-3-6", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nb0d0fca501b9?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-87",
    title: "ライフレベルシステムを公開しました",
    // 公開した日
    date: "2026-3-10", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n4e6ec250ccdb?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-88",
    title: "世界線ルーレットを公開しました",
    // 公開した日
    date: "2026-3-11", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nc23d8818ea53",
    tags: ["DevLog"],
  },
    {
    id: "note-89",
    title: "称号コレクションを公開しました",
    // 公開した日
    date: "2026-3-12", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n89d7e9f91499",
    tags: ["DevLog"],
  },
    {
    id: "note-90",
    title: "AI人生コーチングを公開しました",
    // 公開した日
    date: "2026-3-13", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n3f4a50843b8f?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-91",
    title: "AI相談室を公開しました",
    // 公開した日
    date: "2026-3-16", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/ndb7cd4c40bba",
    tags: ["DevLog"],
  },
    {
    id: "note-92",
    title: "ルナ日記を公開しました",
    // 公開した日
    date: "2026-3-17", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n5814ca7639ab?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-93",
    title: "感情マップを公開しました",
    // 公開した日
    date: "2026-3-18", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nc73927e46a9e?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-94",
    title: "ごきげん予報を公開しました",
    // 公開した日
    date: "2026-3-19", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/ndf709f266f5d?app_launch=false",
    tags: ["DevLog"],
  },
];
// =====================================================

export default function AppPortfolio() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("All");
  const tags = useMemo(() => ["All", ...Array.from(new Set(APPS.flatMap(a => a.tags)))], []);

  const filtered = useMemo(() => {
    return APPS.filter(a => {
      const hitQ = [a.name, a.tagline, a.description, a.tags.join(" ")].join(" ").toLowerCase().includes(q.toLowerCase());
      const hitTag = tag === "All" || a.tags.includes(tag);
      return hitQ && hitTag;
    }).sort((a, b) => (b.updatedAt || "").localeCompare(a.updatedAt || ""));
  }, [q, tag]);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
          <div className="size-9 rounded-2xl bg-black text-white grid place-items-center font-bold">A</div>
          <div className="flex-1">
            <h1 className="text-lg font-semibold leading-tight">{PROFILE.displayName}</h1>
            <p className="text-xs text-neutral-500">{PROFILE.tagline}</p>
          </div>
          <nav className="flex items-center gap-2 text-sm">
            <a className="px-3 py-1.5 rounded-full border hover:bg-neutral-100" href="#apps">Apps</a>
            <a className="px-3 py-1.5 rounded-full border hover:bg-neutral-100" href="#blog">Blog</a>
            <a className="px-3 py-1.5 rounded-full border hover:bg-neutral-100" href={PROFILE.links.x} target="_blank" rel="noreferrer">X</a>
            <a className="px-3 py-1.5 rounded-full border hover:bg-neutral-100" href={PROFILE.links.note} target="_blank" rel="noreferrer">note</a>
            <a className="px-3 py-1.5 rounded-full border hover:bg-neutral-100" href={PROFILE.links.github} target="_blank" rel="noreferrer">GitHub</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Hero */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">小さく作って、早く出す。</h2>
          <p className="text-neutral-600 max-w-2xl">{PROFILE.bio}</p>
        </section>

        {/* Apps */}
        <section id="apps" className="mb-10">
          <div className="mb-4 flex flex-col md:flex-row gap-3 md:items-center">
            <h3 className="text-xl font-semibold">Apps</h3>
            <div className="flex-1" />
            <div className="flex-1">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="検索：アプリ名・説明・タグ"
                className="w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-neutral-300"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {tags.map(t => (
                <button
                  key={t}
                  onClick={() => setTag(t)}
                  className={`px-3 py-2 rounded-xl border text-sm whitespace-nowrap ${tag === t ? "bg-black text-white" : "hover:bg-neutral-100"}`}
                >{t}</button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(app => (
              <article key={app.id} className="rounded-2xl border bg-white p-4 hover:shadow-md transition">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="text-lg font-semibold leading-tight">{app.name}</h4>
                  <span className="text-xs px-2 py-1 rounded-full border bg-neutral-50">{app.status}</span>
                </div>
                <p className="text-sm text-neutral-600 mb-2">{app.tagline}</p>
                <p className="text-sm text-neutral-700 line-clamp-3 mb-3">{app.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {app.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-neutral-100">#{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <a className="px-3 py-2 rounded-xl border hover:bg-neutral-100" href={app.url} target="_blank" rel="noreferrer">使ってみる</a>
                  <a className="px-3 py-2 rounded-xl border hover:bg-neutral-100" href={app.repo} target="_blank" rel="noreferrer">ソース</a>
                </div>
                <div className="mt-3 text-xs text-neutral-400">更新日：{app.updatedAt}</div>
              </article>
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full text-center text-neutral-500 border rounded-2xl p-10">
                条件に合うアプリが見つかりませんでした。
              </div>
            )}
          </div>
        </section>

        {/* Blog (note看板) */}
        <section id="blog" className="mb-10">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-semibold">Blog（note）</h3>
            <a className="text-sm underline" href={PROFILE.links.note} target="_blank" rel="noreferrer">すべて見る →</a>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {POSTS.map(p => (
              <article key={p.id} className="rounded-2xl border bg-white p-4 hover:shadow-md transition">
                <h4 className="font-semibold leading-snug mb-1 line-clamp-3">{p.title}</h4>
                <div className="text-xs text-neutral-500 mb-3">{p.date} ・ {p.tags.map(t => `#${t}`).join(" ")}</div>
                <a className="px-3 py-2 rounded-xl border hover:bg-neutral-100 text-sm inline-flex" href={p.url} target="_blank" rel="noreferrer">noteで読む</a>
              </article>
            ))}
            {POSTS.length === 0 && (
              <div className="col-span-full text-center text-neutral-500 border rounded-2xl p-10">
                まだ記事がありません。noteで公開したらここに1行追加してください。
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-10 border rounded-2xl p-6 bg-gradient-to-br from-neutral-50 to-white">
          <h3 className="text-xl font-semibold mb-2">最新情報はXとnoteで</h3>
          <p className="text-neutral-600 mb-4">開発ログ、学び、失敗談をリアルタイムで発信中。フォロー&スキが励みになります。</p>
          <div className="flex gap-2">
            <a className="px-4 py-2 rounded-xl border hover:bg-neutral-100" href={PROFILE.links.x} target="_blank" rel="noreferrer">Xをフォロー</a>
            <a className="px-4 py-2 rounded-xl border hover:bg-neutral-100" href={PROFILE.links.note} target="_blank" rel="noreferrer">noteを読む</a>
          </div>
        </section>
      </main>

      <footer className="max-w-5xl mx-auto px-4 py-10 text-xs text-neutral-500">
        © {new Date().getFullYear()} {PROFILE.displayName}
      </footer>
    </div>
  );
}
