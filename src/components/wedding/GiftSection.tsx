import { useState } from 'react';
import { Gift, Heart, X, Copy, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import techQr from '../../image/tech.png';
import vpQr from '../../image/vp.png';

const bankAccounts = [
  {
    name: 'NGUYEN BA THUC',
    bank: 'TechCombank',
    account: '882681698888',
    qrUrl: techQr,
    fileName: 'QR-Techcombank-Nguyen-Ba-Thuc.png',
  },
  {
    name: 'NGUYEN THI VAN ANH',
    bank: 'VPBank',
    account: '0986105134',
    qrUrl: vpQr,
    fileName: 'QR-VPBank-Nguyen-Thi-Van-Anh.png',
  },
];

const GiftSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const [previewQr, setPreviewQr] = useState<{
    src: string;
    fileName: string;
  } | null>(null);

    // ✅ ADD THIS HERE
  const downloadQr = (src: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  
    return (
    <section className="wedding-section bg-gradient-hero">
      <div className="wedding-container">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="wedding-subtitle">Gửi Lời Chúc</p>
          <h2 className="wedding-title">Hộp Mừng Cưới</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
            Sự hiện diện của bạn là món quà quý giá nhất. Nếu bạn muốn gửi thêm
            lời chúc phúc, chúng tôi xin trân trọng đón nhận.
          </p>
        </div>

        {/* Gift Box Button */}
        <div className="flex justify-center">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <button className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative wedding-card flex flex-col items-center gap-4 cursor-pointer transition-transform duration-300 group-hover:scale-105">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Gift className="w-12 h-12 text-primary" />
                  </div>
                  <span className="font-script text-3xl text-primary">
                    Mở Hộp Quà
                  </span>
                  <p className="text-muted-foreground text-sm">
                    Nhấn để xem mã QR
                  </p>
                </div>
              </button>
            </DialogTrigger>

            <DialogContent className="max-w-lg bg-gradient-to-br from-background to-muted border-primary/20">
              <DialogHeader>
                <DialogTitle className="text-center">
                  <span className="font-script text-4xl text-primary">
                    Mừng Cưới
                  </span>
                </DialogTitle>
              </DialogHeader>

              <div className="text-center mb-6">
                <p className="text-muted-foreground flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4 text-primary fill-primary" />
                  Mọi tình yêu thương xin được gửi về
                  <Heart className="w-4 h-4 text-primary fill-primary" />
                </p>
              </div>

              <div className="space-y-6">
                {bankAccounts.map((account, index) => (
                  <div
                    key={index}
                    className="wedding-card !p-4 flex flex-col sm:flex-row items-center gap-4"
                  >
                    <img
                      src={account.qrUrl}
                      alt={`QR ${account.name}`}
                      onClick={() =>
                        setPreviewQr({
                          src: account.qrUrl,
                          fileName: account.fileName,
                        })
                      }
                      className="w-32 h-32 rounded-lg object-contain bg-white p-2 cursor-pointer hover:scale-105 transition-transform"
                    />

                    <div className="flex-1 text-center sm:text-left">
                      <p className="font-semibold text-foreground">
                        {account.name}
                      </p>
                      <p className="text-sm text-muted-foreground mb-2">
                        {account.bank}
                      </p>

                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        <code className="px-3 py-1 rounded bg-muted text-sm font-mono">
                          {account.account}
                        </code>

                        <button
                          onClick={() =>
                            copyToClipboard(account.account, index)
                          }
                          className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                        >
                          {copiedIndex === index ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4 text-primary" />
                          )}
                        </button>
                      </div>

                      <p className="text-xs text-muted-foreground mt-2">
                        Nhấn vào QR để xem lớn hoặc tải về
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Xin chân thành cảm ơn! 💕
              </p>
            </DialogContent>

            {/* QR PREVIEW DIALOG */}
            <Dialog
              open={!!previewQr}
              onOpenChange={() => setPreviewQr(null)}
            >
              <DialogContent className="max-w-sm text-center">
                {previewQr && (
                  <>
                    <img
                      src={previewQr.src}
                      alt="QR Preview"
                      className="w-64 h-64 mx-auto object-contain"
                    />

                    <button
                      onClick={() =>
                        downloadQr(previewQr.src, previewQr.fileName)
                      }
                      className="mt-4 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90"
                    >
                      Tải mã QR
                    </button>
                  </>
                )}
              </DialogContent>
            </Dialog>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
