#!/bin/bash
# ============================================================
#  Script de renommage des images pour le projet Pirisoft
#  Lancez ce script depuis le dossier où sont vos images
#  Usage : bash rename-images.sh
# ============================================================

# Créez le dossier de destination si besoin
mkdir -p public/images

echo "📁 Copie et renommage des images Pirisoft..."

# Adaptez les noms sources si les vôtres sont différents
cp "Équipe_au_travail.png"                  public/images/equipe.png
cp "Développement_Web___Mobile.png"         public/images/dev-web-mobile.png
cp "Data_Science___IA.png"                  public/images/data-science-ia.png
cp "Conseil___Transformation_digitale.png"  public/images/conseil-transformation.png
cp "Produits_SaaS.png"                      public/images/produits-saas.png
cp "DataCleaning.png"                       public/images/datacleaning.png
cp "Cabinet_d_avocat__gestion_.png"         public/images/cabinet-avocat.png
cp "YourBlog__réseau_social_.png"           public/images/yourblog.png
cp "MediScan.png"                           public/images/mediscan.png
cp "AgriTech_Congo.png"                     public/images/agritech.png
cp "MISSION___Image_africaine_tech.png"     public/images/mission-africa.png
cp "SECTION_CONTACT___Illustration_fon.png" public/images/contact-bg.png

echo "✅ Toutes les images copiées dans public/images/"
echo ""
echo "🚀 Lancez maintenant : npm run dev"
