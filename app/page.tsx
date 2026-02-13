import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, Shield, TrendingUp, Lock } from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-gray-900" />
            <span className="text-xl font-bold text-gray-900">SecureCheck</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">
              サービス概要
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">
              料金プラン
            </a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition">
              よくある質問
            </a>
          </div>
          <Button className="bg-gray-900 text-white hover:bg-gray-800">お問い合わせ</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                  🎯 中小企業向け定額診断
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight text-balance">
                  受注を逃さないための、定額脆弱性診断
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed text-balance">
                  高額な診断費用で諦めていませんか？最低限必要なセキュリティ対策を可視化し、取引先への信頼を証明します。
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 text-base px-8">
                  無料で資料をダウンロード
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-50 text-base px-8">
                  まずはお見積り
                </Button>
              </div>
            </div>
            <div className="relative h-96 md:h-full rounded-2xl overflow-hidden">
              <img 
                src="/hero-shield.jpg" 
                alt="セキュリティ保護のイラスト" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
              3つのポイント
            </h2>
            <p className="text-xl text-gray-600">セキュリティ対策がこんなに簡単に</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Point 1 */}
            <div className="space-y-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-gray-900 transition overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden bg-gray-200">
                <img 
                  src="/low-cost.jpg" 
                  alt="コスト削減イラスト" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">圧倒的低コスト</h3>
                <p className="text-gray-600 leading-relaxed">
                  従来の100万円〜の診断ではなく、中小企業でも導入しやすい定額制。無駄なコストを削減しながら必要なセキュリティ対策を実施できます。
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="space-y-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-gray-900 transition overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden bg-gray-200">
                <img 
                  src="/trust-verification.jpg" 
                  alt="信頼検証イラスト" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">信頼の証明</h3>
                <p className="text-gray-600 leading-relaxed">
                  各種団体の基準を網羅したチェックシートで、大手企業へのアピールに活用。取引先からの信頼を獲得できます。
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="space-y-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-gray-900 transition overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden bg-gray-200">
                <img 
                  src="/step-up-growth.jpg" 
                  alt="成長ステップイラスト" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">ステップアップ型</h3>
                <p className="text-gray-600 leading-relaxed">
                  自動診断から始めることで、無駄なコストを抑えた本格診断への移行が可能。段階的にセキュリティレベルを向上できます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
              こんなお悩みはありませんか？
            </h2>
            <p className="text-xl text-gray-600">中小企業が抱える脆弱性診断の課題</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border-l-4 border-gray-900 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 overflow-hidden bg-gray-200">
                <img 
                  src="/problem-solution.jpg" 
                  alt="問題解決イラスト" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-700 font-semibold mb-3">
                  「大手企業からセキュリティチェックシートの提出を求められたが、どう書けばいいか分からない」
                </p>
                <p className="text-sm text-gray-500">多くの中小企業が取引先からの要求に応えられずにいます</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border-l-4 border-gray-900 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 overflow-hidden bg-gray-200">
                <img 
                  src="/low-cost.jpg" 
                  alt="コスト課題イラスト" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-700 font-semibold mb-3">
                  「脆弱性診断の見積もりが300万円と言われ、手が出せない」
                </p>
                <p className="text-sm text-gray-500">高額な診断費用が経営を圧迫しています</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border-l-4 border-gray-900 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 overflow-hidden bg-gray-200">
                <img 
                  src="/security-checklist.jpg" 
                  alt="セキュリティチェックリストイラスト" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-gray-700 font-semibold mb-3">
                  「何から手をつければいいのか、専門用語ばかりで難しすぎる」
                </p>
                <p className="text-sm text-gray-500">セキュリティの知識がなく判断できません</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 rounded-xl bg-white border-2 border-gray-900">
            <p className="text-center text-xl font-semibold text-gray-900 mb-4">
              その悩み、当社の『定額・簡易診断パッケージ』が解決します
            </p>
            <div className="flex justify-center pt-4">
              <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
                今すぐ相談する
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
              サービス内容の詳細
            </h2>
            <p className="text-xl text-gray-600">当社ならではの強みをご紹介</p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-8 items-start p-8 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 text-white font-bold">
                  ①
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">自動簡易診断</h3>
                <p className="text-gray-600 leading-relaxed">
                  ツールによるスピーディーな脆弱性検知。わずか数時間で初期診断が完了します。
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start p-8 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 text-white font-bold">
                  ②
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">運用状況チェックシート</h3>
                <p className="text-gray-600 leading-relaxed">
                  IPAや各種セキュリティ団体の基準を網羅。社内スタッフが回答するだけで、自社の対策状況が「見える化」されます。
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start p-8 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 text-white font-bold">
                  ③
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">診断レポートの活用</h3>
                <p className="text-gray-600 leading-relaxed">
                  そのまま取引先へのアピール材料として使える「報告書」。大手企業への提出に対応できます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
              料金プラン
            </h2>
            <p className="text-xl text-gray-600">不透明な価格設定を排除した明確な料金体系</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Standard Plan */}
            <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-gray-900 transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">スタンダードプラン</h3>
              <p className="text-gray-600 mb-6">定額制で安心</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">月額</span>
                <span className="text-3xl font-bold text-gray-900 ml-2">◯◯円</span>
                <p className="text-gray-600 text-sm mt-2">（一般的な診断100万〜300万に比べ、約数分の1のコストで開始可能）</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0" />
                  自動簡易診断
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0" />
                  チェックシート作成
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0" />
                  診断レポート提供
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 flex-shrink-0" />
                  基本サポート
                </li>
              </ul>
              <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">
                詳細を見る
              </Button>
            </div>

            {/* Premium Plan */}
            <div className="bg-gray-900 text-white rounded-xl p-8 border-2 border-gray-900 relative">
              <div className="absolute top-4 right-4 bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                推奨
              </div>
              <h3 className="text-2xl font-bold mb-2">本格診断プラン</h3>
              <p className="text-gray-300 mb-6">ステップアップで安心</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">カスタム</span>
                <p className="text-gray-400 text-sm mt-2">簡易診断からの移行でコストダウンできる仕組み</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-gray-300 flex-shrink-0" />
                  手動による詳細診断
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-gray-300 flex-shrink-0" />
                  ペネトレーションテスト
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-gray-300 flex-shrink-0" />
                  詳細な改善提案
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-gray-300 flex-shrink-0" />
                  優先サポート
                </li>
              </ul>
              <Button variant="outline" className="w-full border-white text-gray-900 bg-white hover:bg-gray-100">
                お見積り
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
              導入の流れ
            </h2>
            <p className="text-xl text-gray-600">申し込んだ後のイメージを持たせる</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'お申し込み', desc: 'サービスにお申し込みいただき��す' },
              { step: '02', title: 'ヒアリング', desc: '専門用語不要の丁寧なヒアリング' },
              { step: '03', title: '診断実施', desc: '自動診断＆チェックシート回答' },
              { step: '04', title: 'レポート送付', desc: '結果レポート送付・対策アド��イス' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 text-white text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                {idx < 3 && <div className="hidden md:block text-2xl text-gray-300 mt-4">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
              よくあるご質問
            </h2>
            <p className="text-xl text-gray-600">初心者が躓くポイントを先回りして回答</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: '専門知識がなくても大丈夫ですか？',
                a: 'はい、大丈夫です。当社のサービスは専門知識がない方向けに設計されています。複雑な用語は避け、分かりやすい日本語でご説明します。',
              },
              {
                q: '診断によってサイトが止まることはありませんか？',
                a: 'ご安心ください。当社の自動診断ツールは、本番環境に負荷をかけない安全な診断を行います。サイトの停止はございません。',
              },
              {
                q: 'どこまでの範囲をカバーしていますか？',
                a: 'Web アプリケーション、ネットワークインフラ、運用体制まで、中小企業に必要な最低限のセキュリティチェックをカバーしています。',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-xl text-gray-300 mb-8 text-balance">
            脆弱性診断のことなら、当社の専門スタッフがお手伝いします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-base px-8">
              無料で資料をダウンロード
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-gray-800 text-base px-8">
              お問い合わせ
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5" />
                <span className="font-bold text-white">SecureCheck</span>
              </div>
              <p className="text-sm">
                中小企業向けの定額制脆弱性診断サービス
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">サービス</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">簡易診断</a></li>
                <li><a href="#" className="hover:text-white transition">本格診断</a></li>
                <li><a href="#" className="hover:text-white transition">コンサルティング</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">情報</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">ブログ</a></li>
                <li><a href="#" className="hover:text-white transition">ホワイトペーパー</a></li>
                <li><a href="#" className="hover:text-white transition">お知らせ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">会社</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">について</a></li>
                <li><a href="#" className="hover:text-white transition">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-white transition">お問い合わせ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm">
              &copy; 2024 SecureCheck Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
