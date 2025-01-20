import React from 'react';

export const Question = () => {
  return (
    <div
      className="relative
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        bg-antep-200
        px-8
        pt-10
        pb-8
        gap-8
        font-smooch"
    >
      <div className="w-full max-w-4xl space-y-4"> {/* Akordiyonlar arası boşluk ve genişlik */}
        <h2 className="text-lacivert-200 text-4xl font-bold text-center mb-8">
          Sık Sorulan Sorular
        </h2>

        {/* Akordiyon 1 */}
        <div className="collapse collapse-arrow bg-peach-200 text-lacivert-200 w-full">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Bu platform ne işe yarar?
          </div>
          <div className="collapse-content">
            <p>
              “Bu platform, e-Nabız tahlillerinizi yapay zeka ile analiz ederek sonuçlar hakkında yorumlar sunar. Ancak, bu yorumlar yalnızca bilgi verme amaçlıdır.”
            </p>
          </div>
        </div>

        {/* Akordiyon 2 */}
        <div className="collapse collapse-arrow bg-peach-200 text-lacivert-200 w-full">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Yapay zeka yorumları güvenilir mi?
          </div>
          <div className="collapse-content">
            <p>
              “Yapay zeka yorumları tahlil sonuçlarınıza dayalı genel bilgiler sağlar ancak kesin teşhis koymaz. Bir uzman hekime danışmanız önemlidir.”
            </p>
          </div>
        </div>

        {/* Akordiyon 3 */}
        <div className="collapse collapse-arrow bg-peach-200 text-lacivert-200 w-full">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            E-Nabız bilgilerini nasıl aktarabilirim?
          </div>
          <div className="collapse-content">
            <p>
              “E-Nabız hesabınızdan tahlil sonuçlarını PDF veya Excel formatında indirerek platforma yükleyebilirsiniz.”
            </p>
          </div>
        </div>

        {/* Akordiyon 4 */}
        <div className="collapse collapse-arrow bg-peach-200 text-lacivert-200 w-full">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Tahlil sonuçlarımı nasıl yükleyebilirim?
          </div>
          <div className="collapse-content">
            <p>
              “Tahlil sonuçlarınızı yüklemek için 'Hadi Başlayalım' butonuna tıklayarak PDF yükleme sayfasına geçiş yapın ve sonuçlarınızı yükleyin.”
            </p>
          </div>
        </div>

        {/* Akordiyon 5 */}
        <div className="collapse collapse-arrow bg-peach-200 text-lacivert-200 w-full">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Tahlil bilgilerim güvende mi?
          </div>
          <div className="collapse-content">
            <p>
              “Evet, tüm tahlil verileriniz güvenli bir şekilde saklanır ve analiz sonrası sistemden silinir.”
            </p>
          </div>
        </div>

        {/* Akordiyon 6 */}
        <div className="collapse collapse-arrow bg-peach-200 text-lacivert-200 w-full">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Hangi tahlil türleri destekleniyor?
          </div>
          <div className="collapse-content">
            <p>
              “Bu platform, kan tahlilleri, idrar tahlilleri ve diğer temel biyokimyasal tahlil türlerini desteklemektedir.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};