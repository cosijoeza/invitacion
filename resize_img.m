pkg load image;


for i= 1: 15
    number = int2str(i);

    % load original image.
    current_name = strcat('img/old/',number,'.jpeg')
    img = imread(current_name);

    % Resize to 500x600 pixels.
    new_image = imresize(img,[500,600],'bicubic');

    % Save image
    new_name =  strcat('img/new/',number,'.jpg')
    imwrite(new_image,new_name)

end