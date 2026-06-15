from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageOps

ROOT = Path(r"C:\Users\Yeica\Documents\LucianoWash")
ASSETS = ROOT / "assets"
SHOTS = ROOT / "qa-screenshots" / "delivery-final"
OUT = ROOT / "social-media-presentation"
OUT.mkdir(exist_ok=True)

NAVY = (4, 24, 38)
NAVY2 = (6, 43, 69)
CYAN = (22, 191, 243)
BLUE = (10, 120, 198)
GREEN = (39, 211, 102)
WHITE = (255, 255, 255)
MUTED = (206, 229, 240)
INK = (8, 31, 45)
LIGHT = (238, 248, 252)


def font(size, bold=False):
    candidates = (
        [r"C:\Windows\Fonts\arialbd.ttf", r"C:\Windows\Fonts\segoeuib.ttf"]
        if bold
        else [r"C:\Windows\Fonts\arial.ttf", r"C:\Windows\Fonts\segoeui.ttf"]
    )
    for item in candidates:
        if Path(item).exists():
            return ImageFont.truetype(item, size)
    return ImageFont.load_default()


F = {
    "xs": font(24),
    "sm": font(30),
    "md": font(38),
    "lg": font(58, True),
    "xl": font(78, True),
    "xxl": font(94, True),
    "bold32": font(32, True),
    "bold40": font(40, True),
    "bold50": font(50, True),
    "bold64": font(64, True),
}


def gradient(size, c1=NAVY, c2=NAVY2):
    w, h = size
    img = Image.new("RGB", size, c1)
    px = img.load()
    for y in range(h):
        for x in range(w):
            t = x / w * 0.55 + y / h * 0.45
            px[x, y] = tuple(int(c1[i] * (1 - t) + c2[i] * t) for i in range(3))
    return img


def load_img(path, size=None, cover=True):
    im = Image.open(path).convert("RGB")
    if size:
        if cover:
            im = ImageOps.fit(im, size, method=Image.Resampling.LANCZOS, centering=(0.5, 0.5))
        else:
            im.thumbnail(size, Image.Resampling.LANCZOS)
    return im


def fit_with_center(path, size, center=(0.5, 0.5)):
    im = Image.open(path).convert("RGB")
    return ImageOps.fit(im, size, method=Image.Resampling.LANCZOS, centering=center)


def rounded_mask(size, radius):
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle([0, 0, size[0] - 1, size[1] - 1], radius=radius, fill=255)
    return mask


def paste_round(bg, im, xy, radius=18, shadow=True):
    x, y = xy
    if shadow:
        sh = Image.new("RGBA", im.size, (0, 0, 0, 120))
        sm = rounded_mask(im.size, radius).filter(ImageFilter.GaussianBlur(14))
        bg.paste(sh, (x + 8, y + 12), sm)
    bg.paste(im, xy, rounded_mask(im.size, radius))


def overlay(im, color=(0, 0, 0), alpha=100):
    return Image.blend(im, Image.new("RGB", im.size, color), alpha / 255)


def draw_text(draw, xy, value, text_font, fill=WHITE, max_width=None, spacing=8):
    x, y = xy
    if not max_width:
        draw.text((x, y), value, font=text_font, fill=fill)
        return y + draw.textbbox((0, 0), value, font=text_font)[3]

    words = value.split()
    lines = []
    line = ""
    for word in words:
        test = (line + " " + word).strip()
        if draw.textbbox((0, 0), test, font=text_font)[2] <= max_width or not line:
            line = test
        else:
            lines.append(line)
            line = word
    if line:
        lines.append(line)

    for line in lines:
        draw.text((x, y), line, font=text_font, fill=fill)
        y += draw.textbbox((0, 0), line, font=text_font)[3] + spacing
    return y


def pill(draw, xy, label, text_font, fill=CYAN, text_fill=INK, pad=(22, 12), radius=0):
    x, y = xy
    box = draw.textbbox((0, 0), label, font=text_font)
    w = box[2] + pad[0] * 2
    h = box[3] + pad[1] * 2
    draw.rounded_rectangle([x, y, x + w, y + h], radius=radius, fill=fill)
    draw.text((x + pad[0], y + pad[1] - 2), label, font=text_font, fill=text_fill)
    return w, h


def logo(size):
    im = Image.open(ASSETS / "luciano-wash-logo-official-no-tagline.png").convert("RGBA")
    im.thumbnail((size, size), Image.Resampling.LANCZOS)
    return im


def place_logo(bg, xy, size):
    logo_img = logo(size)
    bg.paste(logo_img, xy, logo_img)


def save_slide_1():
    img = gradient((1080, 1080))
    hero = overlay(load_img(ASSETS / "hero-real-results.webp", (1080, 1080)), NAVY, 145)
    img = Image.blend(hero, img, 0.28)
    draw = ImageDraw.Draw(img)
    place_logo(img, (80, 90), 300)
    pill(draw, (80, 420), "NUEVA PÁGINA OFICIAL", F["xs"], CYAN, INK)
    draw_text(draw, (80, 485), "Luciano Wash", F["xxl"], WHITE, max_width=900, spacing=4)
    draw_text(
        draw,
        (80, 680),
        "Limpieza profesional para autos, hogares, negocios y exteriores",
        F["md"],
        MUTED,
        max_width=780,
        spacing=10,
    )
    pill(draw, (80, 865), "Cotiza por WhatsApp", F["bold32"], GREEN, INK, pad=(28, 16))
    draw_text(draw, (80, 1000), "lucianowash.lps-company.com", F["sm"], CYAN)
    img.save(OUT / "instagram-carousel-01-lanzamiento.png")


def save_slide_2():
    img = Image.new("RGB", (1080, 1080), LIGHT)
    draw = ImageDraw.Draw(img)
    draw_text(draw, (70, 70), "Servicios que cubren toda tu propiedad", F["lg"], INK, max_width=850)
    services = [
        ("Vehículos", ASSETS / "service-autos-camiones-clean.webp", (0.5, 0.5)),
        ("Muebles y alfombras", ASSETS / "service-muebles-alfombras.webp", (0.35, 0.68)),
        ("Hogares y negocios", ASSETS / "service-hogares-negocios-clean.webp", (0.5, 0.55)),
        ("Piscinas y exteriores", ASSETS / "service-piscinas-pressure.webp", (0.5, 0.55)),
    ]
    coords = [(70, 240), (560, 240), (70, 620), (560, 620)]
    for (label, path, center), xy in zip(services, coords):
        card = Image.new("RGB", (450, 310), WHITE)
        card.paste(fit_with_center(path, (450, 210), center), (0, 0))
        card_draw = ImageDraw.Draw(card)
        card_draw.rectangle([0, 210, 450, 310], fill=WHITE)
        card_draw.text((24, 235), label, font=F["bold32"], fill=INK)
        card_draw.rectangle([24, 282, 155, 292], fill=CYAN)
        paste_round(img, card, xy, 14)
    img.save(OUT / "instagram-carousel-02-servicios.png")


def save_slide_3():
    img = gradient((1080, 1080))
    draw = ImageDraw.Draw(img)
    place_logo(img, (70, 70), 210)
    draw_text(draw, (70, 315), "Experiencia que genera confianza", F["lg"], WHITE, max_width=900)
    draw_text(
        draw,
        (70, 450),
        "Luciano Wash ya tiene trayectoria, clientes y resultados reales.",
        F["md"],
        MUTED,
        max_width=840,
        spacing=10,
    )
    metrics = [("+5 años", "de experiencia"), ("+1500", "servicios realizados"), ("+400", "clientes atendidos")]
    y = 640
    for number, label in metrics:
        draw.rectangle([70, y, 1010, y + 110], fill=WHITE)
        draw.text((105, y + 20), number, font=F["bold50"], fill=BLUE)
        draw.text((395, y + 37), label, font=F["bold32"], fill=INK)
        y += 130
    img.save(OUT / "instagram-carousel-03-confianza.png")


def save_slide_4():
    img = Image.new("RGB", (1080, 1080), LIGHT)
    draw = ImageDraw.Draw(img)
    draw_text(draw, (70, 80), "Cotizar es fácil", F["xl"], INK)
    draw_text(
        draw,
        (70, 185),
        "El cliente entiende rápido qué hacer para recibir una estimación.",
        F["md"],
        (72, 103, 118),
        max_width=850,
    )
    steps = [
        ("1", "Envía fotos", "Muestra el auto, sofá, alfombra, piscina o área que necesita limpieza."),
        ("2", "Recibe cotización", "Luciano Wash revisa tamaño y condición del trabajo."),
        ("3", "Agendamos y limpiamos", "Coordinamos por WhatsApp y realizamos el servicio."),
    ]
    y = 340
    for number, title, body in steps:
        draw.rectangle([70, y, 1010, y + 155], fill=WHITE, outline=(207, 228, 238), width=2)
        draw.rectangle([100, y + 38, 160, y + 98], fill=CYAN)
        draw.text((121, y + 48), number, font=F["bold32"], fill=INK)
        draw.text((195, y + 30), title, font=F["bold40"], fill=INK)
        draw_text(draw, (195, y + 86), body, F["sm"], (72, 103, 118), max_width=750, spacing=6)
        y += 185
    pill(draw, (70, 930), "CTA: Cotizar", F["bold32"], GREEN, INK, pad=(30, 14))
    img.save(OUT / "instagram-carousel-04-como-funciona.png")


def save_slide_5():
    img = gradient((1080, 1080))
    draw = ImageDraw.Draw(img)
    draw_text(draw, (70, 70), "Una web lista para vender servicios", F["lg"], WHITE, max_width=820)
    draw_text(
        draw,
        (70, 185),
        "Servicios claros, antes/después, redes y formulario directo a WhatsApp.",
        F["sm"],
        MUTED,
        max_width=760,
    )
    shot = load_img(SHOTS / "00-full-desktop.png", (820, 620), cover=False)
    canvas = Image.new("RGB", (860, 650), WHITE)
    canvas.paste(shot, ((860 - shot.width) // 2, 18))
    paste_round(img, canvas, (110, 300), 18)
    pill(draw, (330, 980), "Ver página oficial", F["bold32"], CYAN, INK, pad=(30, 14))
    img.save(OUT / "instagram-carousel-05-web.png")


def save_slide_6():
    img = gradient((1080, 1080))
    draw = ImageDraw.Draw(img)
    place_logo(img, (350, 70), 360)
    draw_text(draw, (70, 470), "Agenda tu servicio", F["xl"], WHITE, max_width=850)
    items = [
        ("WhatsApp", "(929)-642-9620"),
        ("Instagram", "@lucianowash_"),
        ("Cobertura", "New York y zonas cercanas"),
        ("Web", "lucianowash.lps-company.com"),
    ]
    y = 610
    for key, value in items:
        draw.rectangle([70, y, 1010, y + 82], fill=WHITE)
        draw.text((100, y + 24), key, font=F["bold32"], fill=BLUE)
        draw.text((360, y + 24), value, font=F["bold32"], fill=INK)
        y += 100
    draw_text(draw, (70, 1010), "Website by YC Systems", F["sm"], CYAN)
    img.save(OUT / "instagram-carousel-06-contacto.png")


def save_story():
    img = gradient((1080, 1920))
    bg = overlay(load_img(ASSETS / "hero-real-results.webp", (1080, 1920)), NAVY, 140)
    img = Image.blend(bg, img, 0.25)
    draw = ImageDraw.Draw(img)
    place_logo(img, (280, 120), 520)
    pill(draw, (85, 700), "PÁGINA OFICIAL", F["bold32"], CYAN, INK, pad=(26, 14))
    draw_text(draw, (85, 780), "Limpieza que se nota", F["xxl"], WHITE, max_width=900, spacing=4)
    draw_text(
        draw,
        (85, 1040),
        "Autos, muebles, alfombras, hogares, negocios, piscinas y exteriores.",
        F["md"],
        MUTED,
        max_width=850,
        spacing=12,
    )
    pill(draw, (85, 1340), "Cotizar por WhatsApp", F["bold40"], GREEN, INK, pad=(34, 18))
    draw_text(draw, (85, 1510), "lucianowash.lps-company.com", F["bold40"], CYAN)
    draw_text(draw, (85, 1615), "@lucianowash_", F["bold40"], WHITE)
    img.save(OUT / "instagram-story-lanzamiento.png")


def save_facebook_post():
    img = gradient((1200, 630))
    draw = ImageDraw.Draw(img)
    hero = overlay(load_img(ASSETS / "hero-real-results.webp", (560, 630)), NAVY, 70)
    img.paste(hero, (640, 0))
    place_logo(img, (70, 55), 240)
    pill(draw, (70, 315), "NUEVA WEB OFICIAL", F["xs"], CYAN, INK, pad=(20, 10))
    draw_text(draw, (70, 365), "Luciano Wash", F["bold64"], WHITE)
    draw_text(
        draw,
        (70, 445),
        "Limpieza profesional integral para autos, hogares y negocios.",
        F["sm"],
        MUTED,
        max_width=540,
    )
    pill(draw, (70, 545), "Cotizar", F["bold32"], GREEN, INK, pad=(28, 13))
    draw_text(draw, (240, 557), "lucianowash.lps-company.com", F["sm"], CYAN)
    img.save(OUT / "facebook-post-lanzamiento.png")


def save_copy():
    copy = """# Copy para publicar - Luciano Wash

## Caption principal
Luciano Wash ya tiene página oficial.

Ahora puedes ver servicios, trabajos recientes, antes/después y solicitar una cotización rápida por WhatsApp.

Servicios para autos, hogares, negocios, muebles, alfombras, piscinas y exteriores.

Web: lucianowash.lps-company.com
WhatsApp: (929)-642-9620
Instagram: @lucianowash_

## Caption corto
Nueva página oficial de Luciano Wash.
Limpieza profesional para autos, hogares, negocios y exteriores.
Cotiza por WhatsApp: (929)-642-9620

## Hashtags
#LucianoWash #LimpiezaProfesional #AutoDetailing #PressureWashing #CleaningServices #NewYorkServices #CarDetailing #UpholsteryCleaning #PoolCleaning
"""
    (OUT / "copy-para-publicar.md").write_text(copy, encoding="utf-8")


def main():
    save_slide_1()
    save_slide_2()
    save_slide_3()
    save_slide_4()
    save_slide_5()
    save_slide_6()
    save_story()
    save_facebook_post()
    save_copy()
    for item in sorted(OUT.iterdir()):
        print(f"{item.name} {item.stat().st_size}")


if __name__ == "__main__":
    main()
