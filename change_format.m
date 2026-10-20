%script para cambiarle la extensión a las imagenes con formtato PNG a JPG

%edicion = int2str( input('Edicion: ') );
edicion = int2str( 1 );
start_from = input('¿Con que pagina quiere comenzar?: ');
total_pictures = input('¿Hasta que pagina optimizaras?: ');

old_extention = 'JPG'; %Formato actual
old_path = strcat('./img/'); %Ruta actual

new_extention = 'jpg'; %Nuevo formato
new_path = strcat('./img/optimized/'); %Nueva ruta

for i = start_from: total_pictures
    number = int2str(i);
    picture_name = strcat(old_path,number,'.',old_extention); %Nombre inicial
    img = imread(picture_name);   %Lectura de imagen
    %[img,map] = imread(picture_name);   %Lectura de imagen
    new_name = strcat(new_path,number,'.',new_extention) %Nuevo nombre con nueva ruta
    %imshow(img);
    %imwrite(img,map,new_name,new_extention);    %Escritura de imagen
    imwrite(img,new_name,new_extention);    %Escritura de imagen
end