<?php

use Symfony\Component\Routing\Exception\MethodNotAllowedException;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\Routing\RequestContext;

/**
 * appProdUrlMatcher
 *
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class appProdUrlMatcher extends Symfony\Bundle\FrameworkBundle\Routing\RedirectableUrlMatcher
{
    /**
     * Constructor.
     */
    public function __construct(RequestContext $context)
    {
        $this->context = $context;
    }

    public function match($pathinfo)
    {
        $allow = array();
        $pathinfo = rawurldecode($pathinfo);
        $context = $this->context;
        $request = $this->request;

        if (0 === strpos($pathinfo, '/css/4fe151e')) {
            // _assetic_4fe151e
            if ($pathinfo === '/css/4fe151e.css') {
                return array (  '_controller' => 'assetic.controller:render',  'name' => '4fe151e',  'pos' => NULL,  '_format' => 'css',  '_route' => '_assetic_4fe151e',);
            }

            // _assetic_4fe151e_0
            if ($pathinfo === '/css/4fe151e_part_1_common_1.css') {
                return array (  '_controller' => 'assetic.controller:render',  'name' => '4fe151e',  'pos' => 0,  '_format' => 'css',  '_route' => '_assetic_4fe151e_0',);
            }

        }

        if (0 === strpos($pathinfo, '/js')) {
            if (0 === strpos($pathinfo, '/js/69f99b3')) {
                // _assetic_69f99b3
                if ($pathinfo === '/js/69f99b3.js') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => '69f99b3',  'pos' => NULL,  '_format' => 'js',  '_route' => '_assetic_69f99b3',);
                }

                // _assetic_69f99b3_0
                if ($pathinfo === '/js/69f99b3_app_1.js') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => '69f99b3',  'pos' => 0,  '_format' => 'js',  '_route' => '_assetic_69f99b3_0',);
                }

            }

            if (0 === strpos($pathinfo, '/js/943731b')) {
                // _assetic_943731b
                if ($pathinfo === '/js/943731b.js') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => '943731b',  'pos' => NULL,  '_format' => 'js',  '_route' => '_assetic_943731b',);
                }

                // _assetic_943731b_0
                if ($pathinfo === '/js/943731b_agent_1.js') {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => '943731b',  'pos' => 0,  '_format' => 'js',  '_route' => '_assetic_943731b_0',);
                }

            }

        }

        // app_default_index
        if (rtrim($pathinfo, '/') === '') {
            if (substr($pathinfo, -1) !== '/') {
                return $this->redirect($pathinfo.'/', 'app_default_index');
            }

            return array (  '_controller' => 'AppBundle\\Controller\\DefaultController::indexAction',  '_route' => 'app_default_index',);
        }

        // app_default_agent
        if ($pathinfo === '/agent') {
            return array (  '_controller' => 'AppBundle\\Controller\\DefaultController::agentAction',  '_route' => 'app_default_agent',);
        }

        throw 0 < count($allow) ? new MethodNotAllowedException(array_unique($allow)) : new ResourceNotFoundException();
    }
}
