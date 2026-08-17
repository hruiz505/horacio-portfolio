import qrcode
from qrcode.constants import ERROR_CORRECT_H

URL = "https://horacio-ruiz-portfolio.vercel.app"
OUTPUT_PATH = "public/business-card.png"

qr = qrcode.QRCode(
    error_correction=ERROR_CORRECT_H,
    box_size=20,
    border=4,
)
qr.add_data(URL)
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")
img.save(OUTPUT_PATH)

print(f"QR code for {URL} saved to {OUTPUT_PATH}")
