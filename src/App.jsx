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
