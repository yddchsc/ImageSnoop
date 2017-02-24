#coding=utf-8
import cv2
import scipy as sp
import numpy as np

img1 = cv2.imread('D:/dashuluoli.jpg', 0) # queryImage
#img2 = cv2.imread('./test1.jpg',0) # trainImage

cv2.imshow("view1", img1)
# Initiate SIFT detector
sift = cv2.SIFT()

# find the keypoints and descriptors with SIFT
kp1, des1 = sift.detectAndCompute(img1,None)
#kp2, des2 = sift.detectAndCompute(img2,None)


bf = cv2.BFMatcher()
    #返回k个最佳匹配
matches = bf.knnMatch(des1, des1, k=4)
    # cv2.drawMatchesKnn expects list of lists as matches.
    #opencv3.0有drawMatchesKnn函数
    # Apply ratio test
    # 比值测试，首先获取与A 距离最近的点B（最近）和C（次近），只有当B/C
    # 小于阈值时（0.75）才被认为是匹配，因为假设匹配是一一对应的，真正的匹配的理想距离为0
good1 = []
for t, m, e ,n in matches:
    if m.distance < 0.5 * n.distance:
        good1.append([m])
img2 = cv2.imread('D:/dashuluoli.jpg', cv2.IMREAD_COLOR)
for m in range(len(good1)):
    color = tuple([sp.random.randint(0, 255) for _ in xrange(3)])
    cv2.line(img2, (int(kp1[good1[m][0].queryIdx].pt[0]), int(kp1[good1[m][0].queryIdx].pt[1])) , (int(kp1[good1[m][0].trainIdx].pt[0]), int(kp1[good1[m][0].trainIdx].pt[1])), color)

cv2.imshow("view", img2)
#cv2.imwrite( "test1.jpg", img1);
cv2.waitKey()

