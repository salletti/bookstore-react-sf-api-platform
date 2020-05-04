<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CartController extends AbstractController
{
    /**
     *
     * @Route("/bookstore/cart", name="bookstore_cart_page")
     * @return Response
     */
    public function cart(): Response
    {
        return $this->render('index.html.twig');
    }
}
