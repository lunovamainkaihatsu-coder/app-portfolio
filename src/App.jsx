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
                 {
    id: "app-95",
    name: "一言褒めガチャ",
    tagline: "一言",
    description: "ガチャ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-92dmtlrmp8pv7u4y9rxwrb.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-3-23",
  },
                 {
    id: "app-96",
    name: "今日のラッキーカラー",
    tagline: "ラッキーカラー",
    description: "ガチャ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-ksbzkupgixvmmcrbwepvkx.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-3-27",
  },
                 {
    id: "app-97",
    name: "五秒ルーレット",
    tagline: "やること",
    description: "ルーレット",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-euuhzgsfhzcryj5jhfsrd3.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-4-1",
  },
                 {
    id: "app-98",
    name: "おやすみ前ルーレット",
    tagline: "寝る前",
    description: "ルーレット",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-xfwsp6rnxw2pqbq7bry22x.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-4-2",
  },
                 {
    id: "app-99",
    name: "称号ルーレット",
    tagline: "称号",
    description: "ルーレット",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-fmgvvjda8xexkuleee3nb2.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-4-6",
  },
                 {
    id: "app-100",
    name: "今日の運勢カード",
    tagline: "運勢",
    description: "カード",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-f4dvklzkyfqv2pfa2dxr2b.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-4-7",
  },
                 {
    id: "app-101",
    name: "今日の小さな魔法",
    tagline: "魔法",
    description: "小さな",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-akdabv4v5r4cfbrk4xhhtm.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-4-8",
  },
                 {
    id: "app-102",
    name: "きっかけボタン",
    tagline: "きっかけ",
    description: "ボタン",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-ghfkuvprwn9tparfz46ge5.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-4-10",
  },
                 {
    id: "app-103",
    name: "ルナ天気",
    tagline: "ルナ",
    description: "天気",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-25ktvz9feuunhryzntktqy.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-4-13",
  },
                 {
    id: "app-104",
    name: "おはようルーレット",
    tagline: "おはよう",
    description: "ルーレット",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-rhglhybcvgyvfn8btn8kbq.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-4-14",
  },
                 {
    id: "app-106",
    name: "今日のご褒美",
    tagline: "まいにち",
    description: "ご褒美",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-omhmeh9pex2wkn9wrcwb4j.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-4-16",
  },
                 {
    id: "app-107",
    name: "やる気復活ボタン",
    tagline: "やる気",
    description: "ボタン",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-yazvcxybcve9afbhz5dqmb.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-4-17",
  },
                 {
    id: "app-108",
    name: "今日の1ミッション",
    tagline: "今日の",
    description: "ミッション",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-vddhgxeawrtot34vjnyy2l.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-4-18",
  },
                 {
    id: "app-109",
    name: "応援モード",
    tagline: "応援",
    description: "モード",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-fgngrtp5qqxykfpx2ukhwk.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-4-19",
  },
                 {
    id: "app-110",
    name: "今日の一言称号",
    tagline: "今日の",
    description: "称号",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-ydx9b96agsq7efiqow2ys8.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-4-20",
  },
                 {
    id: "app-111",
    name: "今日の気分シール",
    tagline: "今日の",
    description: "気分",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-v86qbdpagxmtcmvdnujk2o.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-4-21",
  },
                 {
    id: "app-112",
    name: "今日の気分アイコン",
    tagline: "今日の",
    description: "気分",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-bqtdrpfay2tjbfqbduzjf4.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-4-22",
  },
                 {
    id: "app-113",
    name: "今日の一言回復薬",
    tagline: "今日の",
    description: "回復薬",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-3y8czxd8vhzsmd6sscdvry.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-4-23",
  },
                 {
    id: "app-114",
    name: "ごきげんガチャ",
    tagline: "ごきげん",
    description: "ガチャ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-gtxrcmbanavpw7zzzhjnow.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-4-24",
  },
                 {
    id: "app-115",
    name: "ひとこと冒険イベント",
    tagline: "ひとこと",
    description: "イベント",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-5tmfkdfo8iwffjz6apq42k.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-4-25",
  },
                 {
    id: "app-116",
    name: "ひとことクエスト発生",
    tagline: "ひとこと",
    description: "クエスト",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-xw3xc8dcfrkwhhglj8mqhv.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-4-26",
  },
                 {
    id: "app-117",
    name: "読書記録アプリ",
    tagline: "読書",
    description: "記録",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-cjtqg87k7f9m4ljhqfvzpe.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-4-27",
  },
                 {
    id: "app-118",
    name: "名言・メモ保管庫",
    tagline: "名言",
    description: "記録",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-btweufj4pwlzhzvfsr6kd6.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-4-28",
  },
                 {
    id: "app-119",
    name: "学び・アクション化ボタン",
    tagline: "学習",
    description: "アクション",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-8dqjpzsivvkvjuupdjrgtq.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-4-29",
  },
                 {
    id: "app-120",
    name: "やること整理ボード",
    tagline: "整理",
    description: "ボード",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-jvaxrwudxka89s3rm7ffbk.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-4-30",
  },
                {
    id: "app-121",
    name: "習慣チェック表",
    tagline: "習慣チェック表",
    description: "習慣チェック表",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-8jsslaagqgrehsd63hdr7n.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-1",
  },
                {
    id: "app-122",
    name: "習慣分析ダッシュボード",
    tagline: "習慣分析ダッシュボード",
    description: "習慣分析ダッシュボード",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-j5harwl7semodztjqgpfds.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-2",
  },
                {
    id: "app-123",
    name: "習慣レベルアップ",
    tagline: "習慣レベルアップ",
    description: "習慣レベルアップ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-uwskwlmaztwl6dv34ixdfy.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-3",
  },
                {
    id: "app-124",
    name: "習慣ボス戦",
    tagline: "習慣ボス戦",
    description: "",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-xgbfwpdjkgxtunxrl7czhs.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-4",
  },
                {
    id: "app-125",
    name: "今日のふりかえりAI",
    tagline: "今日のふりかえりAI",
    description: "",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-iyujmsbjyogrptcd8zxnn8.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-5",
  },
                {
    id: "app-126",
    name: "明日の自分へメモ",
    tagline: "明日の自分へメモ",
    description: "",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-osnguhqirdva545gccbpai.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-6",
  },
                {
    id: "app-127",
    name: "今日のありがとう記録",
    tagline: "今日のありがとう記録",
    description: "",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-gbdxxxcpyprhczvyuxjq6w.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-7",
  },
                {
    id: "app-128",
    name: "五月病リカバリーモード",
    tagline: "五月病リカバリーモード",
    description: "五月病リカバリーモード",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-jgskofgmdjtj6fpyym5qxf.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-8",
  },
                {
    id: "app-129",
    name: "脳内ごちゃごちゃ整理メモ",
    tagline: "脳内ごちゃごちゃ整理メモ",
    description: "脳内ごちゃごちゃ整理メモ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-r3swdhxw2pqqkk3wus4ul9.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-9",
  },
                {
    id: "app-130",
    name: "ルナの作戦会議室",
    tagline: "ルナの作戦会議室",
    description: "ルナの作戦会議室",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-ypcs2humyhkc56nwwt5lxs.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-10",
  },
                {
    id: "app-131",
    name: "小さな勝利ログ",
    tagline: "小さな勝利ログ",
    description: "小さな勝利ログ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-ha3ytld3vyz3ewmkkg3puy.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-11",
  },
                {
    id: "app-132",
    name: "気力ゲージ",
    tagline: "気力ゲージ",
    description: "気力ゲージ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-dzxjuadnh8xc5hffqqkzyj.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-12",
  },
                {
    id: "app-133",
    name: "生活リズムチェック",
    tagline: "生活",
    description: "リズム",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-funcxjqdqrlu8pwre4fmu7.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-13",
  },
                {
    id: "app-134",
    name: "食事管理ログ",
    tagline: "食事管理ログ",
    description: "食事管理ログ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-ryu8qszsdt74wwpysfg2dg.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-14",
  },
                {
    id: "app-135",
    name: "たんぱく質チェッカー",
    tagline: "たんぱく質チェッカー",
    description: "たんぱく質チェッカー",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-7a8smpxjl7loascxsuacj9.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-15",
  },
                {
    id: "app-136",
    name: "筋トレ記録ログ",
    tagline: "筋トレ記録ログ",
    description: "筋トレ記録ログ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-gfgdafu7qjwfqx9tmvkvqn.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-16",
  },
                {
    id: "app-137体重・体脂肪・BMI管理ログ",
    name: "体重・体脂肪・BMI管理ログ",
    tagline: "体重・体脂肪・BMI管理ログ",
    description: "体重・体脂肪・BMI管理ログ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-jkxen82cxqfmf2n9jn66rq.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-17",
  },
                {
    id: "app-138",
    name: "睡眠ログ",
    tagline: "睡眠ログ",
    description: "睡眠ログ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-mpphjuko2kwtglkj8jipqi.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-18",
  },
                {
    id: "app-139",
    name: "水分補給ログ",
    tagline: "水分",
    description: "ログ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-2z3an8pwfafavmlog8aumm.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-19",
  },
                {
    id: "app-140",
    name: "筋トレ提案アプリ",
    tagline: "筋トレ",
    description: "提案",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-20",
  },
                {
    id: "app-141",
    name: "ストレッチ提案アプリ",
    tagline: "ストレッチ",
    description: "提案",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-gnvodt3pbr9mr4tgdtpmew.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-21",
  },
                {
    id: "app-142",
    name: "回復行動ログ",
    tagline: "回復",
    description: "行動ログ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-h8ufqs9ikisamphfabghpm.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-22",
  },
                {
    id: "app-143",
    name: "気分回復ガチャ",
    tagline: "気分回復",
    description: "ガチャ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-a6ihmfin7ane8rhngp3mqz.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-23",
  },
                {
    id: "app-144",
    name: "忘れ物チェックアプリ",
    tagline: "忘れ物チェックアプリ",
    description: "忘れ物チェックアプリ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-h8rncwkdqbbwkk5uys7yxn.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-24",
  },
                {
    id: "app-145",
    name: "お金使ったログ",
    tagline: "お金",
    description: "ログ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-bkxksagpxfy2qi6u7sfca3.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-25",
  },
                {
    id: "app-146",
    name: "未来ノート",
    tagline: "未来",
    description: "ログ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-samz8jnvcike8eanwbwbin.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-26",
  },
];
                {
    id: "app-147",
    name: "今日のステータス画面",
    tagline: "今日のステータス画面",
    description: "今日のステータス画面",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-mkpte9qxkflkdraapppeu45.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-27",
  },
  {
    id: "app-148",
    name: "ありがとうログ",
    tagline: "ありがとうログ",
    description: "ありがとうログ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-w6kzguxpwfyvs5vjzgv2nc.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-28",
  },
    {
    id: "app-149",
    name: "気持ち切り替えスイッチ",
    tagline: "気持ち切り替えスイッチ",
    description: "気持ち切り替えスイッチ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-m6mrbi5cthg4nupa9zca6d.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-29",
  },
    {
    id: "app-150",
    name: "会話のタネメーカー",
    tagline: "会話のタネメーカー",
    description: "会話のタネメーカー",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-ajm4y445jslhvxzvuhydrs.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-30",
  },
    {
    id: "app-151",
    name: "今日のクエスト掲示板",
    tagline: "今日のクエスト掲示板",
    description: "今日のクエスト掲示板",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-gf2mp6ucmrmqybcn3b9tvn.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-5-31",
  },
  {
    id: "app-152",
    name: "やったことタイムライン",
    tagline: "やったことタイムライン",
    description: "やったことタイムライン",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-2uyeaju8wnyfbpbezmbmur.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-1",
  },
    {
    id: "app-153",
    name: "習慣図鑑",
    tagline: "習慣図鑑",
    description: "習慣図鑑",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://lunovamainkaihatsu-coder-ma-day153-habit-encyclopediaapp-vx3ao9.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-2",
  },
    {
    id: "app-154",
    name: "習慣ルーレット",
    tagline: "習慣ルーレット",
    description: "習慣ルーレット",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-7eeakqwef5d55rayrnwqzw.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-3",
  },
    {
    id: "app-155",
    name: "アイデア保管庫",
    tagline: "アイデア保管庫",
    description: "アイデア保管庫",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-bypeolyht6jyttqd7vvdaw.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-4",
  },
    {
    id: "app-156",
    name: "AIアプリ図鑑",
    tagline: "AIアプリ図鑑",
    description: "AIアプリ図鑑",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-7hcqxye5vfvbm6lcn7ox2t.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-5",
  },
    {
    id: "app-157",
    name: "本棚管理アプリ",
    tagline: "本棚",
    description: "管理",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-hwczjqdxeuhsijyngnpank.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-6",
  },
    {
    id: "app-158",
    name: "学びアクション変換",
    tagline: "学びアクション変換",
    description: "学びアクション変換",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "http://mainitiapp-kghr5e2ozgw2r9cpahevjm.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-7",
  },
    {
    id: "app-159",
    name: "願い事保管庫",
    tagline: "願い事保管庫",
    description: "願い事保管庫",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-kma6y35onjdb8ramtbjn5s.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-8",
  },
    {
    id: "app-160",
    name: "ビジョンボードメモ",
    tagline: "ビジョンボードメモ",
    description: "ビジョンボードメモ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-g2kyuuxsgcmgxp9gyvxvz8.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-9",
  },
    {
    id: "app-161",
    name: "人生ステータス画面",
    tagline: "人生ステータス画面",
    description: "人生ステータス画面",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-k9k7yqmw7grwnhd8c6hl4f.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-10",
  },
    {
    id: "app-162",
    name: "割引計算シミュレーター",
    tagline: "割引計算シミュレーター",
    description: "割引計算シミュレーター",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-8wykurvq9m3cr82ryy6pub.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-11",
  },
    {
    id: "app-163",
    name: "割り勘メーカー",
    tagline: "割り勘メーカー",
    description: "割り勘メーカー",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-kzv8vkgwxhgw6tfwjriyjm.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-12",
  },
    {
    id: "app-164",
    name: "サブスク管理帳",
    tagline: "サブスク管理帳",
    description: "サブスク管理帳",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-erd9wymxzyuox42xi8qdxe.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-13",
  },
];
    {
    id: "app-165",
    name: "収益化チャレンジ管理",
    tagline: "収益化チャレンジ管理",
    description: "収益化チャレンジ管理",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-13",
  },
    {
    id: "app-166",
    name: "今日の一歩メーカー",
    tagline: "今日の一歩メーカー",
    description: "今日の一歩メーカー",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-mzwshj9x3rkq5dbeeyqc7j.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-15",
  },
    {
    id: "app-167",
    name: "1日100円節約チャレンジ",
    tagline: "1日100円節約チャレンジ",
    description: "1日100円節約チャレンジ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-gyyaycuyrf6hwwejveql3d.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-16",
  },
    {
    id: "app-168",
    name: "買うか悩むチェッカー",
    tagline: "買うか悩むチェッカー",
    description: "買うか悩むチェッカー",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-tqrprnpvr2i949cyr2egdn.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-17",
  },
    {
    id: "app-169",
    name: "冷蔵庫メモ",
    tagline: "冷蔵庫メモ",
    description: "冷蔵庫メモ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-ntihbamocgnhoybgoeu42e.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-17",
  },
    {
    id: "app-170",
    name: "買い物リストメーカー",
    tagline: "買い物リストメーカー",
    description: "買い物リストメーカー",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-17",
  },
    {
    id: "app-171",
    name: "あるもので献立メーカー",
    tagline: "あるもので献立メーカー",
    description: "あるもので献立メーカー",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-lon25tgf3h6rkmqipfchdp.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-20",
  },
    {
    id: "app-172",
    name: "栄養バランスチェッカー",
    tagline: "栄養バランスチェッカー",
    description: "栄養バランスチェッカー",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-vxynwadtdutfia6q7tqcd2.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-21",
  },
    {
    id: "app-173",
    name: "水分補給トラッカー",
    tagline: "水分補給トラッカー",
    description: "水分補給トラッカー",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-qbjgg59f9qptzbcdgnwiue.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-22",
  },
    {
    id: "app-174",
    name: "体重管理グラフ",
    tagline: "体重管理グラフ",
    description: "体重管理グラフ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-gydhpmbmrp3j5zpxgmuncc.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-23",
  },
    {
    id: "app-175",
    name: "健康ポイントシステム",
    tagline: "健康ポイントシステム",
    description: "健康ポイントシステム",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-wwpkcbx5j7seotzkzabaak.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-24",
  },
    {
    id: "app-176",
    name: "睡眠記録帳",
    tagline: "睡眠記録帳",
    description: "睡眠記録帳",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-jcvmbhhmx7menx5vkx2cst.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-25",
  },
    {
    id: "app-177",
    name: "筋トレ記録帳",
    tagline: "筋トレ記録帳",
    description: "筋トレ記録帳",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-qqfaojaut5pxtbdcdb3wfg.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-26",
  },
      {
    id: "app-178",
    name: "人生ステータスRPG",
    tagline: "人生ステータスRPG",
    description: "人生ステータスRPG",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitigohan-uqtisfcfs4pdbgtgiytrox.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-27",
  },
      {
    id: "app-179",
    name: "所持金・支出ログ",
    tagline: "所持金・支出ログ",
    description: "所持金・支出ログ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-zfivhfz5shhejdapkfrwxb.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-28",
  },
      {
    id: "app-180",
    name: "貯金目標メーカー",
    tagline: "貯金目標メーカー",
    description: "貯金目標メーカー",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-zfivhfz5shhejdapkfrwxb.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-29",
  },
      {
    id: "app-181",
    name: "夢・目標ロードマップ",
    tagline: "夢・目標ロードマップ",
    description: "夢・目標ロードマップ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://todaystepapp-zxngxbraemqhsdmax7buh2.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-6-30",
  },
      {
    id: "app-182",
    name: "本棚管理アプリ",
    tagline: "本棚管理アプリ",
    description: "本棚管理アプリ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitigohan-iwdwnygenhfmtjkjfcpgst.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-1",
  },
      {
    id: "app-183",
    name: "AIプロンプト管理帳",
    tagline: "AIプロンプト管理帳",
    description: "AIプロンプト管理帳",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-pdkn66mvlsswii7szjvj7a.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-2",
  },
      {
    id: "app-184",
    name: "アプリ公開チェックリスト",
    tagline: "アプリ公開チェックリスト",
    description: "アプリ公開チェックリスト",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-mjrcwkfxevrcg7e3w4vtvt.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-3",
  },
      {
    id: "app-185",
    name: "アプリアイデア図鑑",
    tagline: "アプリアイデア図鑑",
    description: "アプリアイデア図鑑",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-hxvqcupkq3exqv9cfcswus.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-4",
  },
      {
    id: "app-186",
    name: "パスワード管理帳",
    tagline: "パスワード管理帳",
    description: "パスワード管理帳",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-zgublu5svhk3skwnhnfouv.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-5",
  },
      {
    id: "app-187",
    name: "QRコードメーカー",
    tagline: "QRコードメーカー",
    description: "QRコードメーカー",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-pegled2gfg5mqkxuy67m5k.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-6",
  },
      {
    id: "app-188",
    name: "ファイル名一括リネーマー",
    tagline: "ファイル名一括リネーマー",
    description: "ファイル名一括リネーマー",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-ylxq9yghg4j3xewsrsy8vc.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-7",
  },
      {
    id: "app-189",
    name: "レシート管理帳",
    tagline: "レシート管理帳",
    description: "レシート管理帳",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-k5vyc6jgvhk66og5ra9dhb.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-8",
  },
      {
    id: "app-190",
    name: "保証書・購入品管理帳",
    tagline: "保証書・購入品管理帳",
    description: "保証書・購入品管理帳",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-hocnrdqgafr2jjrqxymqhe.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-9",
  },
      {
    id: "app-191",
    name: "在庫管理アプリ",
    tagline: "在庫管理アプリ",
    description: "在庫管理アプリ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-mzqbdgsyzf9fy9odt3trmx.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-10",
  },
      {
    id: "app-192",
    name: "買い物リスト",
    tagline: "買い物リスト",
    description: "買い物リスト",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-ddvkqjmz6vnmfebchqr4va.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-11",
  },
      {
    id: "app-193",
    name: "賞味期限管理アプリ",
    tagline: "賞味期限管理アプリ",
    description: "賞味期限管理アプリ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-ikbndfgerbdyxedztxfuk6.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-12",
  },
      {
    id: "app-194",
    name: "掃除管理アプリ",
    tagline: "掃除管理アプリ",
    description: "掃除管理アプリ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-tnaapproezkjnw9zhkyjyy6.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-13",
  },
      {
    id: "app-195",
    name: "ゴミ出し管理アプリ",
    tagline: "ゴミ出し管理アプリ",
    description: "ゴミ出し管理アプリ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-syapppqq7pnzarkbskteaam.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-14",
  },
      {
    id: "app-196",
    name: "植物管理アプリ",
    tagline: "植物管理アプリ",
    description: "植物管理アプリ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-fenhy7h6hpxetduybv4a95.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-15",
  },
      {
    id: "app-197",
    name: "定期メンテナンス管理アプリ",
    tagline: "定期メンテナンス管理アプリ",
    description: "定期メンテナンス管理アプリ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-k3s64jetbawut8vcnk397n.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-16",
  },
      {
    id: "app-198",
    name: "習慣スタンプカード",
    tagline: "習慣スタンプカード",
    description: "習慣スタンプカード",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-ptjxcsf4az8wmtspwcx2xw.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-17",
  },
      {
    id: "app-199",
    name: "毎日アプリ開発ダッシュボード",
    tagline: "毎日アプリ開発ダッシュボード",
    description: "毎日アプリ開発ダッシュボード",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-plydhgetmpfwxmodrpt7dj.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-18",
  },
      {
    id: "app-200",
    name: "LuNova Developer OS",
    tagline: "LuNova Developer OS",
    description: "LuNova Developer OS",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-mbk65w2hvthmlpcwmpxthx.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-19",
  },
      {
    id: "app-201",
    name: "開発ログAI",
    tagline: "開発ログAI",
    description: "開発ログAI",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-vmrkwkrrbvns4of6o5nbgb.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-20",
  },
      {
    id: "app-202",
    name: "できたログ",
    tagline: "できたログ",
    description: "できたログ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-4h3jvf9zyjtxyulszntynu.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-21",
  },
      {
    id: "app-203",
    name: "今日の優先順位3つ",
    tagline: "今日の優先順位3つ",
    description: "今日の優先順位3つ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-64gpphq77sk9ek9wjsc8pu.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-22",
  },
      {
    id: "app-204",
    name: "カウントダウン",
    tagline: "カウントダウン",
    description: "カウントダウン",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitigohan-ss3n8k4vhbhfvsqckxocdf.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-23",
  },
      {
    id: "app-205",
    name: "プレゼント管理",
    tagline: "プレゼント管理",
    description: "プレゼント管理",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-a5ccwvj25csuifxiiu3f6f.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-24",
  },
      {
    id: "app-206",
    name: "返却期限メモ",
    tagline: "返却期限メモ",
    description: "返却期限メモ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-lya48tkppcqkdbq9yzh7ve.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-25",
  },
      {
    id: "app-207",
    name: "給油・燃費記録",
    tagline: "給油・燃費記録",
    description: "給油・燃費記録",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-amppkhntqvhbfx8bwrxkhy.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-26",
  },
      {
    id: "app-208",
    name: "最安値メモ",
    tagline: "最安値メモ",
    description: "最安値メモ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-g3pvczuct2zzmamwfusnry.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-27",
  },
      {
    id: "app-209",
    name: "おでかけ持ち物リスト",
    tagline: "おでかけ持ち物リスト",
    description: "おでかけ持ち物リスト",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-uka7jpptnkhtrvdz5nyznp.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-28",
  },
      {
    id: "app-210",
    name: "やりたいこと100リスト",
    tagline: "やりたいこと100リスト",
    description: "やりたいこと100リスト",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-kcxwregbqwacwaxetzm7pq.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-29",
  },
      {
    id: "app-211",
    name: "今日の気づきノート",
    tagline: "今日の気づきノート",
    description: "今日の気づきノート",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-klxnzdozdawuypdcljgx3x.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-30",
  },
      {
    id: "app-212",
    name: "AI決断メモ",
    tagline: "AI決断メモ",
    description: "AI決断メモ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-be8mdnycappfqnepi5vy8fj.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-7-31",
  },
      {
    id: "app-213",
    name: "積読・読書管理",
    tagline: "積読・読書管理",
    description: "積読・読書管理",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-6ynxvbvmk2fyamqj6s3cjv.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-8-1",
  },
      {
    id: "app-214",
    name: "学び実践トラッカー",
    tagline: "学び実践トラッカー",
    description: "学び実践トラッカー",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-doq6ubrbsqisvxck9ngdvb.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-8-2",
  },
      {
    id: "app-215",
    name: "失敗・改善ノート",
    tagline: "失敗・改善ノート",
    description: "失敗・改善ノート",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-qsptqxxsoe5ap4t4rmg2cr.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-8-3",
  },
      {
    id: "app-216",
    name: "今日の優先順位3つ",
    tagline: "今日の優先順位3つ",
    description: "今日の優先順位3つ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-ug3kjgtjmgtgjmsx58f9zc.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-8-4",
  },
      {
    id: "app-217",
    name: "カウントダウン管理",
    tagline: "カウントダウン管理",
    description: "カウントダウン管理",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-j48zsyoctsa9pp7adkv4k9.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-8-5",
  },
      {
    id: "app-218",
    name: "できたログ",
    tagline: "できたログ",
    description: "できたログ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-2ckbybmikwyqseyhb52qbz.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-8-6",
  },
      {
    id: "app-219",
    name: "おでかけ持ち物リスト",
    tagline: "おでかけ持ち物リスト",
    description: "おでかけ持ち物リスト",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-usjeash9sy4deygdbx4o3a.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-8-7",
  },
      {
    id: "app-220",
    name: "給油・燃費記録",
    tagline: "給油・燃費記録",
    description: "給油・燃費記録",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-2daeiznvp2v8mjxmd8nshk.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-8-8",
  },
      {
    id: "app-221",
    name: "AI決断メモ",
    tagline: "AI決断メモ",
    description: "AI決断メモ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-8np3sbgqdgfrythnkjkcmm.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-8-9",
  },
      {
    id: "app-222",
    name: "買わなかった貯金",
    tagline: "買わなかった貯金",
    description: "買わなかった貯金",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-3retczmsqs59b6wfiy8vxq.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-8-10",
  },
      {
    id: "app-223",
    name: "あとで読む",
    tagline: "あとで読む",
    description: "あとで読む",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-q8xrn8hyrisglafeqtoavt.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-8-11",
  },
      {
    id: "app-224",
    name: "今日の気づきノート",
    tagline: "今日の気づきノート",
    description: "今日の気づきノート",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitigohan-ksdiwanxozjfw93nd7eejk.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-8-12",
  },
      {
    id: "app-225",
    name: " 5分だけやる",
    tagline: " 5分だけやる",
    description: " 5分だけやる",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-7ih9bk6dc33qvx7r4uk6bg.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-8-13",
  },
      {
    id: "app-226",
    name: " 買ってよかった物ログ",
    tagline: " 買ってよかった物ログ",
    description: " 買ってよかった物ログ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-2chownuvaw9rc223ebvwxe.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-8-13",
  },
      {
    id: "app-227",
    name: "  捨て活ログ",
    tagline: "  捨て活ログ",
    description: "  捨て活ログ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-fnuaowjf3krexbeoem9spb.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-8-14",
  },
      {
    id: "app-228",
    name: "  やめたい習慣カウンター",
    tagline: "  やめたい習慣カウンター",
    description: "  やめたい習慣カウンター",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitigohan-f6ekdevuu2bxckufqgo4f9.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-8-16",
  },
      {
    id: "app-229",
    name: "  家事ローテーション",
    tagline: "  家事ローテーション",
    description: "  家事ローテーション",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-meaykapzzkqbouekmye3dj.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-8-17",
  },
      {
    id: "app-230",
    name: "  ちょい得メモ",
    tagline: "  ちょい得メモ",
    description: "  ちょい得メモ",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-bovjb9uwq2yqimscakmy28.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-8-18",
  },
      {
    id: "app-231",
    name: "  今日の気分ひとこと",
    tagline: "  今日の気分ひとこと",
    description: "  今日の気分ひとこと",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-mlhhwtwutbcopfvuhnuvxf.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-8-19",
  },
      {
    id: "app-232",
    name: "  今いくら使った？",
    tagline: "  今いくら使った？",
    description: "  今いくら使った？",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-j7aavhtitrp4wpguhy4mvy.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-8-20",
  },
      {
    id: "app-233",
    name: "  今日は何点？",
    tagline: "  今日は何点？？",
    description: "  今日は何点？？",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-j7aavhtitrp4wpguhy4mvy.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-8-21",
  },
      {
    id: "app-234",
    name: "  何食べた？",
    tagline: "  何食べた？",
    description: "  何食べた？",
    // ↓ここを、ご主人のアプリのURLに差し替えてね
    url: "https://mainitiapp-2wbik3nkjh7lc6d7zeysct.streamlit.app/",
    repo: "",
    tags: ["Web"],
    status: "公開中",
    // 今日の日付などに更新
    updatedAt: "2026-8-22",
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
    {
    id: "note-95",
    title: "一言褒めガチャを公開しました",
    // 公開した日
    date: "2026-3-23", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/ncecf78b47350?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-96",
    title: "今日のラッキーカラーを公開しました",
    // 公開した日
    date: "2026-3-27", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n501104d1e720?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-97",
    title: "五秒ルーレットを公開しました",
    // 公開した日
    date: "2026-4-1", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n6aac0a452d8d?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-98",
    title: "おやすみ前ルーレットを公開しました",
    // 公開した日
    date: "2026-4-2", 
    // ↓ここを記事のURLに変える
    url: "https://editor.note.com/notes/n7c5788a7ef8e/edit/",
    tags: ["DevLog"],
  },
    {
    id: "note-99",
    title: "称号ルーレットを公開しました",
    // 公開した日
    date: "2026-4-6", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nf9f4e0826930?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-100",
    title: "今日の運勢カードを公開しました",
    // 公開した日
    date: "2026-4-7", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nec5588db9f2b",
    tags: ["DevLog"],
  },
    {
    id: "note-101",
    title: "今日の小さな魔法を公開しました",
    // 公開した日
    date: "2026-4-8", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n9a46547bc900?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-102",
    title: "きっかけボタンを公開しました",
    // 公開した日
    date: "2026-4-10", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n62d4a1f3363a?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-103",
    title: "ひとこと天気アプリを公開しました",
    // 公開した日
    date: "2026-4-13", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n4dd5684d3007?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-104",
    title: "おはようルーレットを公開しました",
    // 公開した日
    date: "2026-4-14", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n28e52a309dd3?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-105",
    title: "ひとことお守りを公開しました",
    // 公開した日
    date: "2026-4-15", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n6687382b2378?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-106",
    title: "毎日ご褒美提案を公開しました",
    // 公開した日
    date: "2026-4-16", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nd4f2962342a5?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-107",
    title: "やる気復活ボタンを公開しました",
    // 公開した日
    date: "2026-4-17", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n50fa074c106b?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-108",
    title: "今日の1ミッションを公開しました",
    // 公開した日
    date: "2026-4-18", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nb6ea5ca13ed1?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-109",
    title: "今日の応援モードを公開しました",
    // 公開した日
    date: "2026-4-19", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n721df022200f?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-110",
    title: "今日の一言称号を公開しました",
    // 公開した日
    date: "2026-4-20", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n83252dbf04a8?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-111",
    title: "今日の気分シールを公開しました",
    // 公開した日
    date: "2026-4-21", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n232ecb89c706?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-112",
    title: "今日の気分アイコンを公開しました",
    // 公開した日
    date: "2026-4-22", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n5f4835885df7?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-113",
    title: "今日の一言回復薬を公開しました",
    // 公開した日
    date: "2026-4-23", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/notes/n42a743b66f8d/landing",
    tags: ["DevLog"],
  },
    {
    id: "note-114",
    title: "ごきげんガチャを公開しました",
    // 公開した日
    date: "2026-4-24", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n3646eff3d572",
    tags: ["DevLog"],
  },
     {
    id: "note-115",
    title: "今日のひとこと冒険イベントを公開しました",
    // 公開した日
    date: "2026-4-25", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/notes/nfd97e60cdfb7/landing",
    tags: ["DevLog"],
  },
     {
    id: "note-116",
    title: "ひとことクエスト発生を公開しました",
    // 公開した日
    date: "2026-4-26", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nbf837e9ff8e6?app_launch=false",
    tags: ["DevLog"],
  },
     {
    id: "note-117",
    title: "読書記録アプリを公開しました",
    // 公開した日
    date: "2026-4-27", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nfe79aad69e7c?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-118",
    title: "名言・メモ記録アプリを公開しました",
    // 公開した日
    date: "2026-4-28", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n628081909193?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-119",
    title: "学びアクション化ボタンを公開しました",
    // 公開した日
    date: "2026-4-29", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n19b1b004bb7c?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-120",
    title: "やること整理ボードを公開しました",
    // 公開した日
    date: "2026-4-30", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n8b6dffb535a7?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-121",
    title: "習慣チェック表を公開しました",
    // 公開した日
    date: "2026-5-1", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n4ab9bf28a2a3?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-122",
    title: "習慣分析ダッシュボードを公開しました",
    // 公開した日
    date: "2026-5-2", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/ne9b3a3ca99bc?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-123",
    title: "習慣レベルアップを公開しました",
    // 公開した日
    date: "2026-5-3", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/notes/n74b5607456c5/landing",
    tags: ["DevLog"],
  },
    {
    id: "note-124",
    title: "習慣ボスを公開しました",
    // 公開した日
    date: "2026-5-4", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n0ce55f31db2b?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-125",
    title: "今日のふりかえりAIを公開しました",
    // 公開した日
    date: "2026-5-5", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n1f397b8f2808?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-126",
    title: "明日の自分へメモを公開しました",
    // 公開した日
    date: "2026-5-6", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n8b530c53a951?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-127",
    title: "今日のありがとう記録を公開しました",
    // 公開した日
    date: "2026-5-7", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n54a33ad3e3e5?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-128",
    title: "五月病リカバリーモードを公開しました",
    // 公開した日
    date: "2026-5-8", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n388885c89385?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-129",
    title: "脳内ごちゃごちゃ整理メモを公開しました",
    // 公開した日
    date: "2026-5-9", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n262c48f75c84?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-130",
    title: "ルナの作戦会議室を公開しました",
    // 公開した日
    date: "2026-5-10", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/notes/n4e804cd47d1a/landing",
    tags: ["DevLog"],
  },
    {
    id: "note-131",
    title: "小さな勝利ログを公開しました",
    // 公開した日
    date: "2026-5-11", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n273fecb6f069?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-132",
    title: "気力ゲージを公開しました",
    // 公開した日
    date: "2026-5-12", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n75c0d08a02fd?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-133",
    title: "生活リズムチェックを公開しました",
    // 公開した日
    date: "2026-5-13", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nfdd0833b1cf4?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-134",
    title: "食事管理ログを公開しました",
    // 公開した日
    date: "2026-5-14", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n556dd93b5848?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-135",
    title: "タンパク質チェッカーを公開しました",
    // 公開した日
    date: "2026-5-15", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n808acdfa58ef?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-136",
    title: "筋トレ記録ログを公開しました",
    // 公開した日
    date: "2026-5-16", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n51253f612201?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-137",
    title: "体重・体脂肪・BMI管理ログを公開しました",
    // 公開した日
    date: "2026-5-17", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n4a6947ec4f9d?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-138",
    title: "睡眠ログを公開しました",
    // 公開した日
    date: "2026-5-18", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n776e165c4230?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-139",
    title: "水分補給ログを公開しました",
    // 公開した日
    date: "2026-5-19", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nd9461a922292?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-140",
    title: "筋トレ提案アプリを公開しました",
    // 公開した日
    date: "2026-5-20", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n3d040a04651b?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-141",
    title: "ストレッチ提案アプリを公開しました",
    // 公開した日
    date: "2026-5-21", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n0ae40d692b7c?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-142",
    title: "回復行動ログアプリを公開しました",
    // 公開した日
    date: "2026-5-22", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/ne5ef845680fa?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-143",
    title: "気分回復ガチャを公開しました",
    // 公開した日
    date: "2026-5-23", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n243f8c1596ed?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-144",
    title: "忘れ物チェックアプリを公開しました",
    // 公開した日
    date: "2026-5-24", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n39a2f3c423c5?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-145",
    title: "お金つかったログを公開しました",
    // 公開した日
    date: "2026-5-25", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nc780366e755c?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-146",
    title: "未来ノートを公開しました",
    // 公開した日
    date: "2026-5-26", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n923720391d7e?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-147",
    title: "今日のステータス画面を公開しました",
    // 公開した日
    date: "2026-5-27", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n2fad9abff360?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-148",
    title: "気持ち切り替えスイッチを公開しました",
    // 公開した日
    date: "2026-5-29", 
    // ↓ここを記事のURLに変える
    url: "",
    tags: ["DevLog"],
  },
    {
    id: "note-149",
    title: "ありがとうログを公開しました",
    // 公開した日
    date: "2026-5-29", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n6c6ae2244d96?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-150",
    title: "会話のタネメーカーを公開しました",
    // 公開した日
    date: "2026-5-30", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n9ea9532ad28e?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-151",
    title: "今日のクエスト掲示板を公開しました",
    // 公開した日
    date: "2026-5-31", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nb5ea03b91555?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-152",
    title: "やったことタイムラインを公開しました",
    // 公開した日
    date: "2026-6-1", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nbaa54f782766?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-153",
    title: "習慣図鑑を公開しました",
    // 公開した日
    date: "2026-6-2", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nf7f1edbf0140?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-154",
    title: "習慣ルーレットを公開しました",
    // 公開した日
    date: "2026-6-3", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/na89ab6c3eaca?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-155",
    title: "アイデア保管庫を公開しました",
    // 公開した日
    date: "2026-6-4", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n4ece8e88dc06?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-156",
    title: "AIアプリ図鑑を公開しました",
    // 公開した日
    date: "2026-6-5", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n5f1d3bc44b77?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-157",
    title: "本棚管理アプリを公開しました",
    // 公開した日
    date: "2026-6-6", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n07fb562402a4?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-158",
    title: "学びアクション変換を公開しました",
    // 公開した日
    date: "2026-6-7", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n4011dd345208?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-159",
    title: "願い事保管庫を公開しました",
    // 公開した日
    date: "2026-6-8", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/neeff3ad06b88?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-160",
    title: "ビジョンボードメモを公開しました",
    // 公開した日
    date: "2026-6-9", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n4aa4156b8d3f?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-161",
    title: "人生ステータス画面を公開しました",
    // 公開した日
    date: "2026-6-10", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n6a740ca674bd?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-162",
    title: "割引計算シミュレーターを公開しました",
    // 公開した日
    date: "2026-6-11", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nff486e674db7?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-163",
    title: "割り勘メーカーを公開しました",
    // 公開した日
    date: "2026-6-12", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n9ee80dcce761?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-164",
    title: "サブスク管理を公開しました",
    // 公開した日
    date: "2026-6-13", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nbc574824cac2",
    tags: ["DevLog"],
  },
    {
    id: "note-165",
    title: "収益化チャレンジ管理を公開しました",
    // 公開した日
    date: "2026-6-14", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nde42e7f8e631?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-166",
    title: "今日の一歩メーカーを公開しました",
    // 公開した日
    date: "2026-6-15", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/ncb9571b87a8b?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-167",
    title: "1日100円節約チャレンジを公開しました",
    // 公開した日
    date: "2026-6-16", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n28f43ac2b6e3?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-168",
    title: "買うか悩むチェッカーを公開しました",
    // 公開した日
    date: "2026-6-17", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n2c4005914084?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-169",
    title: "冷蔵庫メモを公開しました",
    // 公開した日
    date: "2026-6-18", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n4c5260b7f795?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-170",
    title: "買い物リストメーカーを公開しました",
    // 公開した日
    date: "2026-6-19", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n7ea5a9e701ab?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-171",
    title: "あるもので献立メーカーを公開しました",
    // 公開した日
    date: "2026-6-20", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n5a2357012318?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-172",
    title: "栄養バランスチェッカ－を公開しました",
    // 公開した日
    date: "2026-6-21", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n7ec7f49a50e5?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-173",
    title: "水分補給トラッカーを公開しました",
    // 公開した日
    date: "2026-6-22", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nc309cf59bf86",
    tags: ["DevLog"],
  },
    {
    id: "note-174",
    title: "体重管理グラフを公開しました",
    // 公開した日
    date: "2026-6-23", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n7e40b85bf98b?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-175",
    title: "健康ポイントシステムを公開しました",
    // 公開した日
    date: "2026-6-24", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n79e517f373b6?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-176",
    title: "睡眠記録超を公開しました",
    // 公開した日
    date: "2026-6-25", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/na8c6dcc4dcf2?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-177",
    title: "筋トレ記録帳を公開しました",
    // 公開した日
    date: "2026-6-26", 
    // ↓ここを記事のURLに変える
    url: "",
    tags: ["DevLog"],
  },
    {
    id: "note-178",
    title: "人生ステータスRPGを公開しました",
    // 公開した日
    date: "2026-6-27", 
    // ↓ここを記事のURLに変える
    url: "",
    tags: ["DevLog"],
  },
    {
    id: "note-179",
    title: "所持金・支出ログを公開しました",
    // 公開した日
    date: "2026-6-28", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n989cd458ce84?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-180",
    title: "貯金目標メーカーを公開しました",
    // 公開した日
    date: "2026-6-29", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n65c373056c71?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-181",
    title: "夢・目標ロードマップを公開しました",
    // 公開した日
    date: "2026-6-30", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n01ff2db21a96?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-182",
    title: "本棚管理アプリを公開しました",
    // 公開した日
    date: "2026-7-1", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nfc1023b07cf4?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-183",
    title: "AIプロンプト管理帳を公開しました",
    // 公開した日
    date: "2026-7-2", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nac7017f3fab5?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-184",
    title: "アプリ公開チェックリストを公開しました",
    // 公開した日
    date: "2026-7-3", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n4816e2715035?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-185",
    title: "アプリアイデア図鑑を公開しました",
    // 公開した日
    date: "2026-7-4", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n863c11c3832a",
    tags: ["DevLog"],
  },
    {
    id: "note-186",
    title: "パスワード管理帳を公開しました",
    // 公開した日
    date: "2026-7-5", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n46e967b9cc23?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-187",
    title: "QRコードメーカーを公開しました",
    // 公開した日
    date: "2026-7-6", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n0f5a3b2d510f?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-188",
    title: "ファイル名一括リネーマーを公開しました",
    // 公開した日
    date: "2026-7-7", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nf119abefa474?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-189",
    title: "レシート管理帳を公開しました",
    // 公開した日
    date: "2026-7-8", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n1de1d792453e?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-190",
    title: "保証書・購入品管理帳を公開しました",
    // 公開した日
    date: "2026-7-9", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nc4aa82905469?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-191",
    title: "在庫管理アプリを公開しました",
    // 公開した日
    date: "2026-7-10", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n6772982e7786?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-192",
    title: "買い物リストを公開しました",
    // 公開した日
    date: "2026-7-11", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n272f86fcd8db?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-193",
    title: "賞味期限管理アプリを公開しました",
    // 公開した日
    date: "2026-7-12", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n6c7099d1e8ed?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-194",
    title: "掃除管理アプリを公開しました",
    // 公開した日
    date: "2026-7-13", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n0b4aab2f537e?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-195",
    title: "ゴミ出し管理アプリを公開しました",
    // 公開した日
    date: "2026-7-14", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nebdb214c977c",
    tags: ["DevLog"],
  },
    {
    id: "note-196",
    title: "植物管理アプリを公開しました",
    // 公開した日
    date: "2026-7-15", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n1ec234d06e42?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-197",
    title: "定期メンテナンス管理アプリを公開しました",
    // 公開した日
    date: "2026-7-16", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nc63a4589e378?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-198",
    title: "習慣スタンプカードを公開しました",
    // 公開した日
    date: "2026-7-17", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n98398812f3f1?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-199",
    title: "毎日アプリ開発ダッシュボード公開しました",
    // 公開した日
    date: "2026-7-18", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n34e95d321ec8?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-200",
    title: "LuNova Developer OSを公開しました",
    // 公開した日
    date: "2026-7-19", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n96438c30229a",
    tags: ["DevLog"],
  },
    {
    id: "note-201",
    title: "開発者ログAIを公開しました",
    // 公開した日
    date: "2026-7-20", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nb68a991105ba?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-202",
    title: "できたログを公開しました",
    // 公開した日
    date: "2026-7-21", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/naf76196705ff?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-203",
    title: "今日の優先順位3つを公開しました",
    // 公開した日
    date: "2026-7-22", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/neae533f9355d?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-204",
    title: "カウントダウンアプリを公開しました",
    // 公開した日
    date: "2026-7-23", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n151a46de6a21?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-205",
    title: "プレゼント管理を公開しました",
    // 公開した日
    date: "2026-7-24", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nfd016eeabbc6?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-206",
    title: "返却期限メモを公開しました",
    // 公開した日
    date: "2026-7-25", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n513a031a0aff",
    tags: ["DevLog"],
  },
    {
    id: "note-207",
    title: "給油・燃費記録を公開しました",
    // 公開した日
    date: "2026-7-26", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n7b58106f3cc0?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-208",
    title: "最安値メモを公開しました",
    // 公開した日
    date: "2026-7-27", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nae39a57a8a1b?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-209",
    title: "おでかけ持ち物リストを公開しました",
    // 公開した日
    date: "2026-7-28", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n3160ee738190?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-210",
    title: "やりたいこと100リストを公開しました",
    // 公開した日
    date: "2026-7-29", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n39274dfa7439?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-211",
    title: "今日の気づきノートを公開しました",
    // 公開した日
    date: "2026-7-30", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nd47d9e6942d4?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-212",
    title: "AI決断メモを公開しました",
    // 公開した日
    date: "2026-7-31", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n18ee54ccfc04?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-213",
    title: "積読・読書管理を公開しました",
    // 公開した日
    date: "2026-8-1", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nd1c8c40de2db?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-214",
    title: "学び実践トラッカーを公開しました",
    // 公開した日
    date: "2026-8-2", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n021b4273e1b8?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-215",
    title: "失敗・改善ノートを公開しました",
    // 公開した日
    date: "2026-8-3", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nb8057f7e16fb?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-216",
    title: "今日の優先順位3つを公開しました",
    // 公開した日
    date: "2026-8-4", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nfb27703258fc?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-217",
    title: "カウントダウン管理アプリを公開しました",
    // 公開した日
    date: "2026-8-5", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n2dc9d3d84f20?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-218",
    title: "できたログを公開しました",
    // 公開した日
    date: "2026-8-6", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n4b8e7a5cc5a8?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-219",
    title: "おでかけ持ち物リストを公開しました",
    // 公開した日
    date: "2026-8-7", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/ne720ecb64988?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-220",
    title: "給油・燃費記録を公開しました",
    // 公開した日
    date: "2026-8-8", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n1cad60d0bd94?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-221",
    title: "AI決断メモを公開しました",
    // 公開した日
    date: "2026-8-9", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n22ec35e854c0",
    tags: ["DevLog"],
  },
    {
    id: "note-222",
    title: "買わなかった貯金を公開しました",
    // 公開した日
    date: "2026-8-10", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/neff3ec260ed7?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-223",
    title: "あとで読むアプリを公開しました",
    // 公開した日
    date: "2026-8-11", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/na3ea50d86f8e?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-224",
    title: "今日の気づきノートを公開しました",
    // 公開した日
    date: "2026-8-12", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n8cbcd5304d87?app_launch=false",
    tags: ["DevLog"],
  },
    {
    id: "note-225",
    title: "5分だけやるを公開しました",
    // 公開した日
    date: "2026-8-13", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n0ca05155363c?app_launch=false",
    tags: ["DevLog"],
  },
      {
    id: "note-226",
    title: "買ってよかった物ログを公開しました",
    // 公開した日
    date: "2026-8-14", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n548434c6dd5e?app_launch=false",
    tags: ["DevLog"],
  },
      {
    id: "note-227",
    title: "捨て活ログを公開しました",
    // 公開した日
    date: "2026-8-15", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nbf9f4f592661?app_launch=false",
    tags: ["DevLog"],
  },
      {
    id: "note-228",
    title: "やめたい習慣カウンターを公開しました",
    // 公開した日
    date: "2026-8-16", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/nb8140773f1b8?app_launch=false",
    tags: ["DevLog"],
  },
      {
    id: "note-229",
    title: "家事ローテーションを公開しました",
    // 公開した日
    date: "2026-8-17", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/na44df7bb3546?app_launch=false",
    tags: ["DevLog"],
  },
      {
    id: "note-230",
    title: "ちょい得メモを公開しました",
    // 公開した日
    date: "2026-8-18", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n19dcd7bf030b?app_launch=false",
    tags: ["DevLog"],
  },
      {
    id: "note-231",
    title: "今日の気分ひとことを公開しました",
    // 公開した日
    date: "2026-8-19", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n34d87b48cb48?app_launch=false",
    tags: ["DevLog"],
  },
      {
    id: "note-232",
    title: "今いくらつかったを公開しました",
    // 公開した日
    date: "2026-8-19", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/naa0877465e2f",
    tags: ["DevLog"],
  },
      {
    id: "note-233",
    title: "今日は何点？を公開しました",
    // 公開した日
    date: "2026-8-21", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/ncaa54632123e?app_launch=false",
    tags: ["DevLog"],
  },
      {
    id: "note-234",
    title: "何食べた？を公開しました",
    // 公開した日
    date: "2026-8-22", 
    // ↓ここを記事のURLに変える
    url: "https://note.com/lunova_create/n/n1bd8345a0b01?app_launch=false",
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
